'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/client"

export default function AddStudyPlanForm({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [deadline, setDeadline] = useState("")
  const [color, setColor] = useState("bg-pink-100")

  const supabase = createClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from("study_plans").insert({
      title,
      description,
      deadline,
      color,
      progress: "0%",
      is_active: false,
    })

    setLoading(false)

    if (error) {
      alert("Gagal menambahkan study plan!")
      console.error(error)
      return
    }

    // Kosongkan form
    setTitle("")
    setDescription("")
    setDeadline("")
    setColor("bg-pink-100")

    onSuccess?.()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur p-4 rounded-xl shadow space-y-3">
      <h2 className="text-lg font-semibold text-pink-700">Tambah Study Plan Baru ✨</h2>
      <Input
        placeholder="Judul Study Plan"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Input
        placeholder="Deskripsi (opsional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <Input
        placeholder="Warna Tailwind (misal: bg-pink-100)"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Menyimpan..." : "Tambah"}
      </Button>
    </form>
  )
}
