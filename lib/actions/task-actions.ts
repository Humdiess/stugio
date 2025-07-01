'use server'

import { createServerClient } from '@supabase/ssr'
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers'
import { cookies, headers } from 'next/headers'

const getSupabase = async () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: async (name) => (await cookies()).get(name)?.value,
        set: async (name, value, options) => (await cookies()).set({ name, value, ...options }),
        remove: async (name, options) => (await cookies()).set({ name, value: '', ...options }),
      },
      headers: headers(),
    }
  );

// 📥 Ambil semua task (opsional bisa tambahkan user filter)
export async function getTasks() {
  const supabase = await getSupabase()
  const { data, error } = await supabase
    .from('study_tasks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) console.error(error)
  return data || []
}

// ➕ Tambah task
export async function addTask(title: string, description: string) {
  const supabase = await getSupabase()

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
function createClient(arg0: string, arg1: string, arg2: { cookies: { get: (name: any) => any; set: (name: any, value: any, options: any) => any; remove: (name: any, options: any) => any }; headers: Promise<ReadonlyHeaders> }) {
    throw new Error('Function not implemented.')
}

