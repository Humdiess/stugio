'use server'

import { createServerClient } from '@supabase/ssr'

export async function getTasks() {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from('study_tasks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) console.error(error)
  return data || []
}

export async function addTask(title: string, description: string) {
  const supabase = createServerClient()
  const { data, error } = await supabase.auth.getUser()
  const user = data.user

  if (!user) throw new Error('Not logged in')

  const res = await supabase.from('study_tasks').insert({
    title,
    description,
    user_id: user.id,
  })

  return res
}

export async function toggleTaskDone(id: string, current: boolean) {
  const supabase = createServerClient()
  return await supabase
    .from('study_tasks')
    .update({ done: !current })
    .eq('id', id)
}

export async function deleteTask(id: string) {
  const supabase = createServerClient()
  return await supabase.from('study_tasks').delete().eq('id', id)
}
