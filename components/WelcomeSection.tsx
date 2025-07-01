import AddStudyPlanModal from "@/components/dashboard/AddStudyPlanModal"

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

      {/* Add Study Plan Modal Trigger */}
      <div className="flex justify-center px-4">
        <AddStudyPlanModal />
      </div>
    </>
  )
}
