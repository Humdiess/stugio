'use client'
import { useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function DebugPage() {
  useEffect(() => {
    supabase.from('study_plans').select('*').then(console.log)
  }, [])

  return <p>Cek console log</p>
}
