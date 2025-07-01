import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Timer } from "lucide-react"
import type { StudyPlan } from "@/types/pomodoro"

interface StudyPlanCardProps {
  plan: StudyPlan
}

export const StudyPlanCard = ({ plan }: StudyPlanCardProps) => {
  return (
    <Card
      className={`${plan.color} hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 ${
        plan.isActive ? "ring-2 ring-pink-400 ring-opacity-50" : ""
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base lg:text-lg font-bold text-gray-800 line-clamp-2 flex-1">
            {plan.title}
          </CardTitle>
          {plan.isActive && (
            <Badge className="bg-pink-500 text-white flex-shrink-0">
              <Timer className="w-3 h-3 mr-1" />
              Active
            </Badge>
          )}
        </div>
        <CardDescription className="text-gray-600 text-sm line-clamp-3">{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2 text-pink-500 flex-shrink-0" />
          <span className="font-medium">Deadline: {plan.deadline}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" />
          <span className="font-medium">Progress: {plan.progress}</span>
        </div>
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full border-pink-300 text-pink-600 hover:bg-pink-50 hover:border-pink-400 font-medium bg-white/80"
          >
            {plan.isActive ? "Sedang Belajar" : "Mulai Belajar"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
