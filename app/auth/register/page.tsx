'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const { error } = await supabase.auth.signUp({
            email,
            password
        })

        if (error) {
            setMessage("Gagal daftar: " + error.message)
        } else {
            setMessage("Berhasil! Cek email untuk verifikasi akun ✅")
        }
    }

      return (
    <div className="max-w-md mx-auto mt-12 p-4 border rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-4 text-center">Daftar Akun</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="email"
          placeholder="Email kamu"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
          Daftar
        </button>
      </form>
      {message && <p className="text-sm text-gray-600 mt-4 text-center">{message}</p>}
    </div>
  )
}