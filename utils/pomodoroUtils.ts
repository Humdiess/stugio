import { Coffee, Brain } from "lucide-react"
import type { PomodoroMode, ModeConfig } from "@/types/pomodoro"

export const getModeConfig = (mode: PomodoroMode): ModeConfig => {
  switch (mode) {
    case "focus":
      return {
        label: "Focus Time",
        icon: Brain,
        color: "from-pink-500 to-rose-500",
        bgColor: "from-pink-50 to-rose-50",
        textColor: "text-pink-600",
      }
    case "shortBreak":
      return {
        label: "Short Break",
        icon: Coffee,
        color: "from-purple-500 to-violet-500",
        bgColor: "from-purple-50 to-violet-50",
        textColor: "text-purple-600",
      }
    case "longBreak":
      return {
        label: "Long Break",
        icon: Coffee,
        color: "from-indigo-500 to-blue-500",
        bgColor: "from-indigo-50 to-blue-50",
        textColor: "text-indigo-600",
      }
  }
}
