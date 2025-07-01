'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { createClient } from "@/utils/supabase/client"
import { Plus } from "lucide-react"

export default function AddStudyPlanModal() {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [deadline, setDeadline] = useState("")
  const [color, setColor] = useState("#fbcfe8")
  const [loading, setLoading] = useState(false)

  const supabase = createClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from("study_plans").insert({
      title,
      description,
      deadline,
      color: `bg-[${color}]`,
      progress: "0%",
      is_active: false,
    })

    setLoading(false)

    if (error) {
      alert("Gagal menambahkan study plan!")
      console.error(error)
    } else {
      setTitle("")
      setDescription("")
      setDeadline("")
      setColor("#fbcfe8")
      setOpen(false)
      location.reload()
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
        >
          <Plus className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
          Tambah Study Plan
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-pink-600">Tambah Study Plan</DialogTitle>
          <DialogDescription>Isi form di bawah untuk menambah rencana belajar baru ✨</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 mt-4">
          <Input placeholder="Judul Plan" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <Input placeholder="Deskripsi (opsional)" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
          <div>
            <label className="block text-sm mb-1 text-gray-600">Warna Kartu</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-10 w-20 rounded-md border"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Menyimpan..." : "Tambah"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
