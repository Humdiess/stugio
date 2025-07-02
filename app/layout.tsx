
import './globals.css'
import type { Metadata } from 'next'


export const metadata = {
  title: "Stugio — Study Planner Aesthetic & Produktif 🎀",
  description:
    "Stugio adalah aplikasi belajar coquette-style untuk bantu kamu atur rencana belajar, fokus dengan Pomodoro, dan catat progres kamu 💖",
  metadataBase: new URL("https://your-vercel-app.vercel.app"), // ganti dengan domain kamu
  openGraph: {
    title: "Stugio — Study Planner Aesthetic & Produktif 🎀",
    description:
      "Aplikasi belajar coquette-style: rencana belajar, Pomodoro, dan progress tracker ✨",
    url: "https://your-vercel-app.vercel.app",
    siteName: "Stugio",
    images: [
      {
        url: "/og-cover.png", // simpan di /public
        width: 1200,
        height: 630,
        alt: "Stugio App Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stugio — Study Planner Aesthetic & Produktif 🎀",
    description:
      "Buat rencana belajar yang estetik dan teratur dengan Stugio!",
    images: ["/og-cover.png"],
    creator: "@yourtwitter",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
