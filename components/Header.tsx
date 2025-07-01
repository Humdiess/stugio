import type React from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LogOut, BookOpen, Timer } from "lucide-react"
import LoginButton from "@/components/LoginLogoutButton";

interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  PomodoroSidebar: React.ComponentType
}

export const Header = ({ sidebarOpen, setSidebarOpen, PomodoroSidebar }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 lg:py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3 cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Stugio
          </h1>
        </a>

        <div className="flex items-center space-x-2">
          {/* Mobile Pomodoro Trigger */}
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden text-pink-600 hover:bg-pink-50">
                <Timer className="w-4 h-4 mr-2" />
                Timer
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <PomodoroSidebar />
            </SheetContent>
          </Sheet>
            <LoginButton />
        </div>
      </div>
    </header>
  )
}
