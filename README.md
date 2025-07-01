<h1 align="center">💖 Stugio — A Soft & Simple Study Planner</h1>

<p align="center">
  Plan your study goals, stay focused, and keep things cute ✨<br/>
  Built with Next.js 15, Supabase, and Tailwind CSS.
</p>

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-v15-black?logo=nextdotjs" />
  <img src="https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Shadcn--UI-Components-pink" />
</div>

---

## 🌸 Apa itu Stugio?

**Stugio** adalah aplikasi web lucu nan minimalis untuk membantu kamu:
- Merancang rencana belajar
- Mencatat target akademik
- Tetap konsisten belajar

Cocok buat pejuang UTBK, mahasiswa, atau siapa pun yang mau belajar dengan gaya **aesthetic + soft** 🎀

---

## 🧁 Fitur Utama

- 💌 Login pakai email (OTP Magic Link)
- 📝 Tambah & lihat daftar Study Plan (rencana belajar)
- 🔐 Logout dan proteksi halaman otomatis
- 🎀 Tampilan manis ala coquette (soft UI, pastel vibes)
- 📦 Disimpan di Supabase (serverless database & auth)

---

## 🧪 Tech Stack

| Teknologi     | Fungsi                        |
|---------------|-------------------------------|
| Next.js 15    | Framework React (App Router)  |
| Supabase      | Backend, Auth, DB             |
| Tailwind CSS  | Styling responsif             |
| Shadcn/ui     | Komponen UI siap pakai        |

---

## 🚀 Cara Menjalankan Projek

1. **Clone repo ini**

```bash
git clone https://github.com/username/stugio.git
cd stugio
```

2. **Install dependencies**

```bash
npm install
```

3. **Buat file `.env.local` dan isi:**

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> Kamu bisa dapat `URL` dan `ANON KEY` dari halaman project di Supabase.

4. **Jalankan server lokal**

```bash
npm run dev
```

Lalu buka di browser:  
`http://localhost:3000`

---

## 🌷 Catatan Tambahan

- 🔐 Halaman utama (`/`) hanya bisa diakses kalau sudah login
- 📥 Supabase otomatis membuat akun saat login pertama
- 📡 Semua data tersimpan di Supabase (secure + real-time)

---

## 📸 Screenshot (opsional)

> Kamu bisa tambahkan gambar tampilan app di sini nanti.

---

## 🧠 Rencana Fitur Selanjutnya

- Progress tracker (% belajar selesai)
- Reminder belajar
- Versi Android (pakai database yang sama)

---

## 👩🏻‍💻 Author

Made with 💕 by Humdiee  
Open to contributions & collab!

```
stugio
├─ app
│  ├─ (auth)
│  │  ├─ auth
│  │  │  └─ confirm
│  │  │     └─ route.ts
│  │  ├─ login
│  │  │  ├─ components
│  │  │  │  ├─ LoginForm.tsx
│  │  │  │  ├─ SignUpForm.tsx
│  │  │  │  └─ SingInWithGoogleButton.tsx
│  │  │  └─ page.tsx
│  │  └─ logout
│  │     └─ page.tsx
│  ├─ dashboard
│  │  └─ page.tsx
│  ├─ error
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ hooks
│  ├─ layout.tsx
│  └─ page.tsx
├─ components
│  ├─ Header.tsx
│  ├─ LoginLogoutButton.tsx
│  ├─ PomodoroSidebar.tsx
│  ├─ StudeyPlanCard.tsx
│  ├─ ui
│  │  ├─ badge.tsx
│  │  ├─ button.tsx
│  │  ├─ card.tsx
│  │  ├─ input.tsx
│  │  ├─ label.tsx
│  │  ├─ progress.tsx
│  │  └─ sheet.tsx
│  ├─ UserGreetText.tsx
│  └─ WelcomeSection.tsx
├─ components.json
├─ constants
│  └─ studyPlans.ts
├─ hooks
│  └─ usePomodoro.ts
├─ lib
│  ├─ actions
│  │  └─ task-actions.ts
│  ├─ auth-actions.ts
│  └─ utils.ts
├─ middleware.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ tsconfig.json
├─ types
│  └─ pomodoro.ts
└─ utils
   ├─ pomodoroUtils.ts
   ├─ supabase
   │  ├─ client.ts
   │  ├─ middleware.ts
   │  └─ server.ts
   └─ timeUtils.ts

```