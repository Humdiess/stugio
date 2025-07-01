"use client"

import { useState, useEffect, useRef } from "react"
import type { PomodoroMode, PomodoroSession } from "@/types/pomodoro"
import { POMODORO_DURATIONS } from "@/constants/studyPlans"

export const usePomodoro = () => {
  const [currentMode, setCurrentMode] = useState<PomodoroMode>("focus")
  const [timeLeft, setTimeLeft] = useState(POMODORO_DURATIONS.focus)
  const [isRunning, setIsRunning] = useState(false)
  const [sessions, setSessions] = useState<PomodoroSession[]>([])
  const [completedSessions, setCompletedSessions] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      handleSessionComplete()
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, timeLeft])

  const handleSessionComplete = () => {
    setIsRunning(false)

    const newSession: PomodoroSession = {
      id: Date.now().toString(),
      mode: currentMode,
      duration: POMODORO_DURATIONS[currentMode],
      completedAt: new Date(),
    }

    setSessions((prev) => [...prev, newSession])

    if (currentMode === "focus") {
      setCompletedSessions((prev) => prev + 1)
      const nextMode = completedSessions > 0 && (completedSessions + 1) % 4 === 0 ? "longBreak" : "shortBreak"
      switchMode(nextMode)
    } else {
      switchMode("focus")
    }
  }

  const switchMode = (mode: PomodoroMode) => {
    setCurrentMode(mode)
    setTimeLeft(POMODORO_DURATIONS[mode])
    setIsRunning(false)
  }

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(POMODORO_DURATIONS[currentMode])
  }

  return {
    currentMode,
    timeLeft,
    isRunning,
    sessions,
    completedSessions,
    switchMode,
    toggleTimer,
    resetTimer,
  }
}
