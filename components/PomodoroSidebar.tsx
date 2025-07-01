"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, RotateCcw, CheckCircle2 } from "lucide-react"
import type { PomodoroMode } from "@/types/pomodoro"
import { POMODORO_DURATIONS } from "@/constants/studyPlans"
import { formatTime, calculateProgress, calculateFocusTime } from "@/utils/timeUtils"
import { getModeConfig } from "@/utils/pomodoroUtils"

interface PomodoroSidebarProps {
  currentMode: PomodoroMode
  timeLeft: number
  isRunning: boolean
  sessions: any[]
  completedSessions: number
  switchMode: (mode: PomodoroMode) => void
  toggleTimer: () => void
  resetTimer: () => void
}

export const PomodoroSidebar = ({
  currentMode,
  timeLeft,
  isRunning,
  sessions,
  completedSessions,
  switchMode,
  toggleTimer,
  resetTimer,
}: PomodoroSidebarProps) => {
  const currentConfig = getModeConfig(currentMode)
  const progress = calculateProgress(timeLeft, POMODORO_DURATIONS[currentMode])
  const focusTime = calculateFocusTime(completedSessions)

  return (
    <div className="h-full bg-white/95 backdrop-blur-sm">
      <div className="p-4 lg:p-6 space-y-4 lg:space-y-6 h-full overflow-y-auto">
        {/* Header */}
        <div className="text-center border-b border-pink-100 pb-4">
          <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-1">Pomodoro Timer 🍅</h3>
          <p className="text-xs lg:text-sm text-gray-600">Stay focused and productive!</p>
        </div>

        {/* Mode Selector */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700 mb-3">Choose Mode:</p>
          <div className="grid grid-cols-1 gap-2">
            {(["focus", "shortBreak", "longBreak"] as PomodoroMode[]).map((mode) => {
              const config = getModeConfig(mode)
              const Icon = config.icon
              return (
                <Button
                  key={mode}
                  variant={currentMode === mode ? "default" : "outline"}
                  size="sm"
                  onClick={() => switchMode(mode)}
                  className={`flex items-center justify-start p-3 h-auto w-full ${
                    currentMode === mode
                      ? `bg-gradient-to-r ${config.color} text-white shadow-md`
                      : "border-pink-200 text-gray-600 hover:bg-pink-50 bg-white"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  <div className="text-left">
                    <div className="text-sm font-medium">{config.label}</div>
                    <div className="text-xs opacity-80">{POMODORO_DURATIONS[mode] / 60} minutes</div>
                  </div>
                </Button>
              )
            })}
          </div>
        </div>

        {/* Timer Display */}
        <Card className={`bg-gradient-to-br ${currentConfig.bgColor} border-2 border-pink-200 shadow-lg`}>
          <CardContent className="p-4 lg:p-6 text-center">
            <div className="mb-4">
              <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2 font-mono">{formatTime(timeLeft)}</div>
              <p className={`text-sm font-medium ${currentConfig.textColor}`}>{currentConfig.label}</p>
            </div>

            <div className="mb-4">
              <Progress value={progress} className="h-2 bg-white/50" />
              <p className="text-xs text-gray-600 mt-1">{Math.round(progress)}% complete</p>
            </div>

            <div className="flex justify-center space-x-2">
              <Button
                onClick={toggleTimer}
                size="sm"
                className={`bg-gradient-to-r ${currentConfig.color} hover:opacity-90 text-white shadow-md px-4`}
              >
                {isRunning ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isRunning ? "Pause" : "Start"}
              </Button>
              <Button
                onClick={resetTimer}
                variant="outline"
                size="sm"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 bg-white"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base lg:text-lg text-gray-800">Today's Progress 📊</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Completed Sessions</span>
              <Badge className="bg-pink-500 text-white">{completedSessions}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Focus Time</span>
              <span className="text-sm font-medium text-gray-800">
                {focusTime.hours}h {focusTime.minutes}m
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Current Streak</span>
              <span className="text-sm font-medium text-gray-800">🔥 {completedSessions}</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent Sessions */}
        <Card className="bg-gradient-to-br from-peach-50 to-orange-50 border-orange-200 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base lg:text-lg text-gray-800">Recent Sessions 📝</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-32 lg:max-h-40 overflow-y-auto">
              {sessions
                .slice(-5)
                .reverse()
                .map((session) => {
                  const config = getModeConfig(session.mode)
                  const Icon = config.icon
                  return (
                    <div key={session.id} className="flex items-center space-x-3 p-2 bg-white/70 rounded-lg">
                      <Icon className="w-3 h-3 text-gray-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-800 truncate">{config.label}</p>
                        <p className="text-xs text-gray-600">
                          {session.completedAt.toLocaleTimeString("id-ID", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0" />
                    </div>
                  )
                })}
              {sessions.length === 0 && (
                <p className="text-xs text-gray-500 text-center py-4">Belum ada sesi yang selesai hari ini 💕</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
