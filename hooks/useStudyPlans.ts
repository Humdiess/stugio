import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { StudyPlan } from "@/types/pomodoro"

export function useStudyPlans() {
  const [plans, setPlans] = useState<StudyPlan[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    async function fetchPlans() {
      const { data, error } = await supabase
        .from("study_plans")
        .select("*")
        .order("created_at", { ascending: false })

      if (!error && data) setPlans(data)
      setLoading(false)
    }

    fetchPlans()
  }, [supabase])

  return { plans, loading }
}
