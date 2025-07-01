import type { StudyPlan } from "@/types/pomodoro"

export const STUDY_PLANS: StudyPlan[] = [
  {
    id: 1,
    title: "UTBK Matematika Dasar",
    description: "Persiapan intensif matematika dasar untuk UTBK dengan fokus pada aljabar dan geometri",
    deadline: "15 Januari 2025",
    progress: "3/10 sesi",
    color: "bg-gradient-to-br from-pink-50 to-rose-100 border-pink-200",
    isActive: false,
  },
  {
    id: 2,
    title: "Bahasa Inggris TOEFL",
    description: "Meningkatkan kemampuan reading, listening, dan grammar untuk target skor 550+",
    deadline: "28 Januari 2025",
    progress: "5/12 sesi",
    color: "bg-gradient-to-br from-purple-50 to-lavender-100 border-purple-200",
    isActive: true,
  },
  {
    id: 3,
    title: "Fisika Mekanika",
    description: "Memahami konsep dasar mekanika klasik dan penerapannya dalam soal-soal",
    deadline: "10 Februari 2025",
    progress: "1/8 sesi",
    color: "bg-gradient-to-br from-peach-50 to-orange-100 border-orange-200",
    isActive: false,
  },
]

export const POMODORO_DURATIONS = {
  focus: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
}
