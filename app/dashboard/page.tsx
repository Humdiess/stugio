"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { WelcomeSection } from "@/components/WelcomeSection"
import { StudyPlanCard } from "@/components/StudeyPlanCard"
import { PomodoroSidebar } from "@/components/PomodoroSidebar"
import { usePomodoro } from "@/hooks/usePomodoro"
import { useStudyPlans } from "@/hooks/useStudyPlans"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pomodoroState = usePomodoro()
  const { plans, loading } = useStudyPlans()


  const PomodoroSidebarComponent = () => <PomodoroSidebar {...pomodoroState} />

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-peach-50">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} PomodoroSidebar={PomodoroSidebarComponent} />

      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 lg:mr-80">
          <div className="container mx-auto px-4 py-6 lg:py-8 space-y-6 lg:space-y-8">
            <WelcomeSection />

            {/* Study Plans Grid */}
            <div className="space-y-4 lg:space-y-6 px-4">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 text-center lg:text-left">
                Study Plans Kamu ✨
              </h3>

            {loading ? (
              <p className="text-center text-sm text-gray-500">Loading study plans...</p>
            ) : plans.length ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                {plans.map((plan) => (
                  <StudyPlanCard key={plan.id} plan={plan} />
                ))}
              </div>
            ) : (
              <p className="text-center text-sm text-gray-500">Belum ada study plan. Yuk               tambah dulu! 💕</p>
            )}

            </div>

            {/* Empty State Message */}
            <div className="text-center py-6 lg:py-8 px-4">
              <p className="text-gray-500 text-sm">Belum ada study plan lain? Yuk tambah yang baru! 💕</p>
            </div>
          </div>
        </main>

        {/* Desktop Pomodoro Sidebar */}
        <aside className="hidden lg:block fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-sm border-l border-pink-100 shadow-xl z-10">
          <PomodoroSidebarComponent />
        </aside>
      </div>
    </div>
  )
}
