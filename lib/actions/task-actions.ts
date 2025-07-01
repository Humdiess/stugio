'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies, headers } from 'next/headers'

const getSupabase = () =>
  createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: cookies(),
      headers: headers(),
    }
  )

// 📥 Ambil semua task (opsional bisa tambahkan user filter)
export async function getTasks() {
  const supabase = getSupabase()
  const { data, error } = await supabase
    .from('study_tasks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) console.error(error)
  return data || []
}

// ➕ Tambah task
export async function addTask(title: string, description: string) {
  const supabase = getSupabase()

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) throw new Error('Not logged in')

  const { data, error } = await supabase.from('study_tasks').insert({
    title,
    description,
    user_id: user.id,
  })

  if (error) {
    console.error('Gagal menambahkan task:', error.message)
    throw new Error('Gagal menambahkan task')
  }

  return data
}

// ✅ Toggle task selesai/belum
export async function toggleTaskDone(id: string, current: boolean) {
  const supabase = getSupabase()
  const { error } = await supabase
    .from('study_tasks')
    .update({ done: !current })
    .eq('id', id)

  if (error) {
    console.error('Gagal update task:', error.message)
    throw new Error('Gagal update task')
  }
}

// ❌ Hapus task
export async function deleteTask(id: string) {
  const supabase = getSupabase()
  const { error } = await supabase
    .from('study_tasks')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Gagal menghapus task:', error.message)
    throw new Error('Gagal menghapus task')
  }
}

// ❌ Hapus study plan
export async function deleteStudyPlan(id: number) {
  const supabase = getSupabase()
  const { error } = await supabase
    .from('study_plans')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Gagal menghapus plan:', error.message)
    throw new Error('Gagal menghapus plan')
  }
}
