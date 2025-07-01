'use client'

import { StudyPlan } from '@/types/pomodoro'
import { StudyPlanCard } from '@/components/StudeyPlanCard'

export default function StudyPlanList({ plans }: { plans: StudyPlan[] }) {
  if (!plans.length) return <p className="text-sm text-gray-500">Belum ada rencana belajar 😴</p>

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {plans.map((plan) => (
        <StudyPlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}
