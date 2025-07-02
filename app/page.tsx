"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Timer,
  Target,
  TrendingUp,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Users,
  Award,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [email, setEmail] = useState("")

  const features = [
    {
      icon: Timer,
      title: "Pomodoro Timer",
      description: "Teknik belajar 25 menit fokus dengan break yang tepat untuk produktivitas maksimal",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
    },
    {
      icon: Target,
      title: "Study Planning",
      description: "Atur target belajar harian dan mingguan dengan tracking progress yang detail",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Lihat statistik belajar dengan grafik yang informatif dan motivating",
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
    },
    {
      icon: Heart,
      title: "Beautiful Interface",
      description: "Interface yang clean dan aesthetic untuk pengalaman belajar yang menyenangkan",
      color: "from-pink-500 to-purple-500",
      bgColor: "from-pink-50 to-purple-50",
    },
  ]

  const testimonials = [
    {
      name: "Alex Rahman",
      role: "Mahasiswa ITB",
      content:
        "Stugio bantu banget buat ngatur waktu belajar! Interface-nya clean dan fitur Pomodoro-nya sangat membantu fokus.",
      rating: 5,
      avatar: "AR",
    },
    {
      name: "Maya Sari",
      role: "Siswa SMA",
      content: "Timer-nya perfect untuk belajar! Sekarang bisa fokus tanpa distraksi. Highly recommended!",
      rating: 5,
      avatar: "MS",
    },
    {
      name: "Rizki Pratama",
      role: "Gap Year Student",
      content: "UI-nya bagus banget dan user-friendly. Jadi lebih terorganisir dalam persiapan ujian masuk PTN.",
      rating: 5,
      avatar: "RP",
    },
  ]

  const steps = [
    {
      step: "01",
      title: "Daftar Gratis",
      description: "Buat akun Stugio dalam hitungan detik",
      icon: Users,
    },
    {
      step: "02",
      title: "Buat Study Plan",
      description: "Tentukan mata pelajaran dan target belajar kamu",
      icon: BookOpen,
    },
    {
      step: "03",
      title: "Mulai Pomodoro",
      description: "Gunakan timer 25 menit untuk sesi belajar fokus",
      icon: Play,
    },
    {
      step: "04",
      title: "Track Progress",
      description: "Lihat perkembangan dan capai target belajar kamu",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-peach-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Stugio
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-gray-600 hover:text-pink-600 hover:bg-pink-50">
                Dashboard
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
            <Badge className="bg-pink-100 text-pink-600 border-pink-200 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Platform Study Planning dengan Aesthetic Design ✨
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Belajar Jadi Lebih{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Terorganisir
              </span>{" "}
              & Produktif
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Stugio adalah platform study planning dengan Pomodoro timer yang membantu kamu belajar lebih fokus dan
              terstruktur. Interface yang clean, fitur yang powerful, dan pengalaman belajar yang menyenangkan!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  Mulai Belajar Gratis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-6 text-lg font-semibold rounded-2xl bg-white/80 w-full sm:w-auto"
              >
                <Play className="w-5 h-5 mr-2" />
                Lihat Demo
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 pt-8">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                100% Gratis
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No Credit Card
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Instant Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-8 lg:py-16 relative">
        <div className="container mx-auto px-4">
          {/* Desktop Preview */}
          <div className="max-w-6xl mx-auto mb-12 lg:mb-16">
            <div className="relative">
              {/* Browser Frame */}
              <div className="bg-white rounded-t-2xl shadow-2xl border border-gray-200">
                {/* Browser Header */}
                <div className="flex items-center px-4 py-3 bg-gray-50 rounded-t-2xl border-b border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-lg px-3 py-1 text-sm text-gray-500 text-center max-w-md mx-auto">
                      stugio.app/dashboard
                    </div>
                  </div>
                </div>

                {/* App Screenshot Placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-pink-50 via-purple-50 to-peach-50 rounded-b-2xl relative overflow-hidden">
                  {/* Mock Dashboard Content */}
                  <div className="p-6 h-full">
                    {/* Mock Header */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                        <div className="h-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded w-16"></div>
                      </div>
                      <div className="h-8 bg-gray-200 rounded w-20"></div>
                    </div>

                    {/* Mock Welcome Section */}
                    <div className="text-center mb-8">
                      <div className="h-8 bg-gray-300 rounded w-80 mx-auto mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-6"></div>
                      <div className="h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl w-48 mx-auto"></div>
                    </div>

                    {/* Mock Study Plans */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-pink-50 to-rose-100 border-2 border-pink-200 rounded-xl p-4">
                        <div className="h-4 bg-pink-300 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-pink-200 rounded w-full mb-3"></div>
                        <div className="h-3 bg-pink-200 rounded w-24 mb-3"></div>
                        <div className="h-8 bg-pink-500 rounded w-full"></div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-violet-100 border-2 border-purple-200 rounded-xl p-4">
                        <div className="h-4 bg-purple-300 rounded w-28 mb-2"></div>
                        <div className="h-3 bg-purple-200 rounded w-full mb-3"></div>
                        <div className="h-3 bg-purple-200 rounded w-20 mb-3"></div>
                        <div className="h-8 bg-purple-500 rounded w-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Mock Pomodoro Sidebar */}
                  <div className="absolute right-0 top-0 w-72 h-full bg-white/95 backdrop-blur-sm border-l border-pink-100 p-4">
                    <div className="text-center mb-4">
                      <div className="h-5 bg-gray-300 rounded w-32 mx-auto mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-24 mx-auto"></div>
                    </div>

                    {/* Mock Timer */}
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-xl p-4 mb-4">
                      <div className="text-center">
                        <div className="h-12 bg-gray-300 rounded w-24 mx-auto mb-2"></div>
                        <div className="h-2 bg-pink-200 rounded w-full mb-4"></div>
                        <div className="flex justify-center space-x-2">
                          <div className="h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded w-16"></div>
                          <div className="h-8 bg-pink-200 rounded w-8"></div>
                        </div>
                      </div>
                    </div>

                    {/* Mock Stats */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 rounded-xl p-3">
                      <div className="h-4 bg-gray-300 rounded w-24 mb-3"></div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <div className="h-3 bg-gray-200 rounded w-20"></div>
                          <div className="h-3 bg-pink-500 rounded w-6"></div>
                        </div>
                        <div className="flex justify-between">
                          <div className="h-3 bg-gray-200 rounded w-16"></div>
                          <div className="h-3 bg-gray-300 rounded w-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="absolute -top-2 -right-8 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 left-8 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>

          {/* Mobile Preview */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-pink-50 via-purple-50 to-peach-50 rounded-[2rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>

                  {/* Mobile Content */}
                  <div className="pt-8 p-4 h-full">
                    {/* Mobile Header */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                        <div className="h-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded w-12"></div>
                      </div>
                      <div className="h-6 bg-pink-500 rounded w-16 text-xs"></div>
                    </div>

                    {/* Mobile Welcome */}
                    <div className="text-center mb-6">
                      <div className="h-6 bg-gray-300 rounded w-48 mx-auto mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-52 mx-auto mb-4"></div>
                      <div className="h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl w-full"></div>
                    </div>

                    {/* Mobile Study Plans */}
                    <div className="space-y-3">
                      <div className="bg-gradient-to-br from-pink-50 to-rose-100 border border-pink-200 rounded-lg p-3">
                        <div className="h-3 bg-pink-300 rounded w-24 mb-2"></div>
                        <div className="h-2 bg-pink-200 rounded w-full mb-2"></div>
                        <div className="h-6 bg-pink-500 rounded w-full"></div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-violet-100 border border-purple-200 rounded-lg p-3">
                        <div className="h-3 bg-purple-300 rounded w-20 mb-2"></div>
                        <div className="h-2 bg-purple-200 rounded w-full mb-2"></div>
                        <div className="h-6 bg-purple-500 rounded w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-2 w-6 h-6 bg-purple-400 rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Preview Text */}
          <div className="text-center mt-8 lg:mt-12">
            <p className="text-gray-600 text-sm lg:text-base">
              ✨ Interface yang clean dan aesthetic, tersedia untuk desktop dan mobile
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Kenapa Pilih Stugio?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fitur-fitur yang dirancang untuk membantu kamu belajar lebih efektif dan terorganisir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${feature.bgColor} border-2 border-pink-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Cara Kerja Stugio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hanya 4 langkah mudah untuk memulai journey belajar yang lebih terorganisir dan produktif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-pink-200">
                      <span className="text-xs font-bold text-pink-600">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Kata Mereka Tentang Stugio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ribuan pelajar dan mahasiswa sudah merasakan manfaat belajar dengan Stugio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-pink-200 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Siap Jadi Lebih Produktif?</h2>
            <p className="text-lg lg:text-xl text-pink-100">
              Join ribuan pelajar lainnya yang sudah merasakan manfaat belajar dengan Stugio. Mulai journey belajar yang
              lebih terorganisir dan efektif sekarang!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Masukkan email kamu..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/90 border-white/50 text-gray-800 placeholder:text-gray-500"
              />
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-6 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <p className="text-sm text-pink-100">Gratis selamanya • No spam • Unsubscribe kapan saja</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-pink-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Stugio
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Platform study planning dengan aesthetic design. Belajar jadi lebih terorganisir dan produktif!
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-pink-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-pink-100 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">© 2024 Stugio. Made with ❤️ for productive learners everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
