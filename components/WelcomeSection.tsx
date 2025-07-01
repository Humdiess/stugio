"use client"

import { useEffect, useState } from "react"
import AddStudyPlanModal from "@/components/dashboard/AddStudyPlanModal"
import { createClient } from "@/utils/supabase/client"
import Image from "next/image"

export const WelcomeSection = () => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        setUser(user)
      }
    }

    fetchUser()
  }, [])

  const displayName = user?.user_metadata?.full_name ?? "Teman Belajar"
  const avatarUrl = user?.user_metadata?.avatar_url ?? "/default-avatar.png"

  return (
    <>
      {/* Welcome Section */}
      <div className="text-center space-y-3 lg:space-y-4">
        {user && (
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={avatarUrl}
              alt="Avatar"
              width={72}
              height={72}
              className="rounded-full border border-pink-200 shadow-sm"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              Hai, {displayName} 👋
            </h2>
          </div>
        )}

        {!user && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">Halo 👋</h2>
        )}

        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Selamat datang di Stugio! Yuk atur target belajarmu hari ini 🎀
        </p>
      </div>

      {/* Add Study Plan Modal Trigger */}
      <div className="flex justify-center px-4">
        <AddStudyPlanModal />
      </div>
    </>
  )
}
