'use client'

import { createStudyPlan } from '@/lib/actions/study-plan-actions'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function StudyPlanForm() {
  return (
    <form action={createStudyPlan} className="space-y-2 mb-6">
      <Input name="title" placeholder="Judul belajar..." required />
      <Input name="description" placeholder="Deskripsi singkat..." />
      <Input type="date" name="deadline" />
      <Input name="color" placeholder="Contoh: bg-pink-100" />
      <Button type="submit" className="w-full">Tambah Study Plan</Button>
    </form>
  )
}
