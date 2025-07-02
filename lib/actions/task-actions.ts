'use server'

import { createClient } from '@/utils/supabase/server'
import { create } from 'domain'

// Ambil semua tasks user
export async function getTasks() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error('Not logged in')

  const { data, error } = await supabase
    .from('study_tasks')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return []
  }

  return data
}

// Tambah task baru
export async function addTask(title: string, description: string) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error('Not logged in')

  const { error } = await supabase.from('study_tasks').insert({
    title,
    description,
    user_id: user.id,
  })

  if (error) {
    console.error('Gagal menambahkan task:', error.message)
    throw new Error('Gagal menambahkan task')
  }
}

// Toggle task selesai
export async function toggleTaskDone(id: string, current: boolean) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('study_tasks')
    .update({ done: !current })
    .eq('id', id)

  if (error) {
    console.error('Gagal update task:', error.message)
    throw new Error('Gagal update task')
  }
}

// Hapus task
export async function deleteTask(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('study_tasks').delete().eq('id', id)

  if (error) {
    console.error('Gagal menghapus task:', error.message)
    throw new Error('Gagal menghapus task')
  }
}

// Hapus Study Plan
export async function deleteStudyPlan(id: number) {
  const supabase = await createClient()
  const { error } = await supabase.from('study_plans').delete().eq('id', id)

  if (error) {
    console.error('Gagal menghapus plan:', error.message)
    throw new Error('Gagal menghapus plan')
  }
}
