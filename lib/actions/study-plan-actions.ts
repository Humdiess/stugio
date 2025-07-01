'use server'

import { createClient } from '@/utils/supabase/server'
import { createServerClient } from '@supabase/ssr'

export async function getStudyPlans() {
  const supabase = await createClient()
  const { data: session } = await supabase.auth.getUser()
  const user = session.user
  if (!user) return []

  const { data, error } = await supabase
    .from('study_plans')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) console.error(error)
  return data
}

export async function createStudyPlan(formData: FormData) {
  const supabase = await createClient()
  const { data: session } = await supabase.auth.getUser()
  const user = session.user
  if (!user) throw new Error('Not logged in')

  const title = formData.get('title')?.toString() || ''
  const description = formData.get('description')?.toString() || ''
  const deadline = formData.get('deadline')?.toString() || ''
  const color = formData.get('color')?.toString() || 'bg-white'

  const { error } = await supabase.from('study_plans').insert({
    title,
    description,
    deadline,
    user_id: user.id,
    color,
    progress: '0%',
  })

  if (error) throw error
}

export async function deleteStudyPlan(id: string) {
  const supabase = await createClient()
  return await supabase.from('study_plans').delete().eq('id', id)
}
