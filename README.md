# 🚀 Next.js 15 Financial Dashboard

<img width="2000" height="1520" alt="hero-desktop" src="https://github.com/user-attachments/assets/4df77665-777c-44bb-98a7-287a80ece115" />

A production-grade, full-stack financial dashboard built with **Next.js 15 (App Router)**, **TypeScript**, and **PostgreSQL (Neon)**. This project demonstrates modern React architecture patterns using Server Components, Server Actions, and hybrid rendering strategies.

---

## 🔗 Live Demo
**Explore the application:** 👉 [https://nextjs-dashboard-eight-eta-69.vercel.app/](https://nextjs-dashboard-eight-eta-69.vercel.app/)

> ### 🔑 Test Credentials
> * **Email:** `user@nextmail.com`
> * **Password:** `123456`

---

## 🏗 System Architecture & Decisions

### 🛠 Tech Stack
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-38B2AC?style=for-the-badge&logo=tailwind-css)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=for-the-badge&logo=postgresql)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-007ACC?style=for-the-badge&logo=typescript)

### 📐 Architectural Decisions
- **App Router Over Pages Router:** Enables React Server Components (RSC), built-in layouts, and native Streaming/Suspense support.
- **Server Components First:** Most UI is rendered on the server to reduce client bundle size and keep database logic server-side.
- **Server Actions vs REST API:** Used `use server` for mutations to provide type-safe end-to-end data flow without building a separate API layer.

### ⚡ Rendering Strategy
| Page Type | Strategy | Techniques Used |
| :--- | :--- | :--- |
| **Dashboard** | Streaming + RSC | Suspense boundaries, PPR |
| **Invoices** | Dynamic Rendering | URL-based search params |
| **Login** | Static | Next/Image optimization |

---

## 📂 Project Structure
```
/app
├── dashboard/           # Dashboard routes & layouts
│   ├── (overview)/      # Main analytics page (page.tsx, loading.tsx)
│   ├── invoices/        # Invoice CRUD (create, [id]/edit)
│   └── customers/       # Customer list
├── lib/                 # Core logic
│   ├── actions.ts       # Server Actions (Mutations)
│   ├── data.ts          # Data fetching logic
│   └── utils.ts         # Formatting & helper functions
├── ui/                  # Reusable UI Components
│   ├── dashboard/       # Charts, cards, and side nav
│   ├── invoices/        # Forms, tables, and buttons
│   └── skeletons.tsx    # Loading placeholders
├── auth.ts              # NextAuth.js configuration
├── next.config.ts       # Next.js configuration
└── tailwind.config.ts   # Styling configuration
```
---

### ✨ Features
- **Revenue Analytics:** Real-time financial metrics visualization.
- **Full CRUD:** Robust invoice management system.
- **Optimistic UI:** Seamless user experience for database updates.
- **Advanced SEO:** Dynamic metadata and optimized assets.

---

### 🚀 Local Development

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/aalexblade/nextjs-dashboard.git
   cd nextjs-dashboard
   ```
3. Install dependencies:
   
    ```  
    pnpm install
    ```
4.  **Environment Setup:** Create a `.env` file in the root directory and add the following:
    ```
    POSTGRES_URL=your_neon_url_here
    AUTH_SECRET=your_secret_here
    AUTH_URL=http://localhost:3000/api/auth
    ```
5. Run the development server:
   
   ```
   pnpm run dev
   ```
   
---

### ✨ 📈 Future Improvements
[ ] Pagination with cursor-based strategy for large datasets.

[ ] Role-based access control (RBAC).

[ ] Interactive charts integration (Recharts).

[ ] Unit & integration testing (Vitest / Playwright).

Built with an engineering focus on performance and scalability by alexblade 🚀
