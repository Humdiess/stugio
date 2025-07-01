export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
}

export const calculateProgress = (timeLeft: number, totalDuration: number): number => {
  return ((totalDuration - timeLeft) / totalDuration) * 100
}

export const calculateFocusTime = (completedSessions: number): { hours: number; minutes: number } => {
  const totalMinutes = completedSessions * 25
  return {
    hours: Math.floor(totalMinutes / 60),
    minutes: totalMinutes % 60,
  }
}
