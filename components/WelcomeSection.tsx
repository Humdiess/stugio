import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const WelcomeSection = () => {
  return (
    <>
      {/* Welcome Section */}
      <div className="text-center space-y-3 lg:space-y-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">Hai, humdies@gmail.com 👋</h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Selamat datang di Stugio! Yuk atur target belajarmu hari ini 🎀
        </p>
      </div>

      {/* Add Study Plan Button */}
      <div className="flex justify-center px-4">
        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
        >
          <Plus className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
          Tambah Study Plan
        </Button>
      </div>
    </>
  )
}
