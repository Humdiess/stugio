export type PomodoroMode = "focus" | "shortBreak" | "longBreak"

export interface PomodoroSession {
  id: string
  mode: PomodoroMode
  duration: number
  completedAt: Date
}

export interface StudyPlan {
  id: number
  title: string
  description: string
  deadline: string
  progress: string
  color: string
  isActive: boolean
}

export interface ModeConfig {
  label: string
  icon: any
  color: string
  bgColor: string
  textColor: string
}
