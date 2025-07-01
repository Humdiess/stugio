import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { StudyPlan } from "@/types/pomodoro"

export function useStudyPlans() {
  const [plans, setPlans] = useState<StudyPlan[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    async function fetchPlans() {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError || !user) {
        console.error("Gagal ambil user:", userError?.message)
        setPlans([])
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from("study_plans")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

      if (!error && data) setPlans(data)
      setLoading(false)
    }

    fetchPlans()
  }, [supabase])

  return { plans, loading }
}
