## Lumina Ai


Lumina AI is an **AI-powered SaaS platform** built with Next.js and Cloudinary.  
It allows users to **upload, transform, and optimize media with AI**, while offering authentication, payments, and a modern UI.  



[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBartoszJarocki%2Fcv)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-8+-F69220?logo=pnpm)](https://pnpm.io/)
![npm version](https://img.shields.io/npm/v/<your-package-name>.svg)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## 🛠 Tech Stack Setup

- **Frontend & Backend** → Next.js (App Router or Pages Router)

- **Database** → NeonDB(PostgreSQL) + Prisma(ORM)

- **Auth** → Clerk/Auth0

- **File Handling** → Cloudinary (upload, store, optimize, transform media)

- **AI APIs** → OpenAI, Replicate, Hugging Face, or custom models

- **Styling** → TailwindCSS + ShadCN UI + Daisyui

- **Payments** → Stripe for subscriptions (SaaS monetization)

- **Containerization** → Docker

- **Deployment** → Vercel (for Next.js) + Cloudinary (for assets)

## ✨ Features

- 🔐 Authentication with Clerk/Auth0
- 📸 Upload & optimize media using Cloudinary
- 🤖 AI integrations (text, image, video)
- 💳 Subscription payments with Stripe
- 🎨 Modern UI with Tailwind + ShadCN
- 🚀 Serverless deployment on Vercel

## Folder Structure 
```ts
lumina-ai/
│
├── app/                     # Next.js App Router (routes, pages, layouts)
│   ├── (auth)/              # Auth routes (login, register, etc.)
│   ├── dashboard/           # User dashboard
│   ├── api/                 # API routes (server actions / route handlers)
│   ├── layout.tsx
│   └── page.tsx
│
├── components/              # Reusable UI components
│   ├── ui/                  # ShadCN / base UI components
│   ├── forms/               # Form components
│   ├── media/               # Media preview, upload UI
│   └── shared/              # Navbar, Footer, etc.
│
├── lib/                     # Utility functions & configs
│   ├── cloudinary.ts        # Cloudinary setup
│   ├── stripe.ts            # Stripe config
│   ├── auth.ts              # Clerk/Auth helpers
│   ├── prisma.ts            # Prisma client
│   └── utils.ts
│
├── config/                  # Global configuration
│   ├── site.ts              # App metadata
│   └── constants.ts
│
├── prisma/                  # Database schema & migrations
│   ├── schema.prisma
│   └── migrations/
│
├── types/                   # TypeScript types
│   ├── user.d.ts
│   ├── media.d.ts
│   └── billing.d.ts
│
├── public/                  # Static assets
│   ├── images/
│   └── icons/
│
├── generated/               # Auto-generated files (Prisma, etc.)
│
├── docker/                  # Docker setup
│   ├── Dockerfile
│   └── docker-compose.yml
│
├── .env.example             # Environment variables template
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md

```

## Getting Started

First, run the development server:

```ts
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## 🏗 System Architecture
```ts
User → Next.js Frontend → API Routes → Prisma ORM → NeonDB  
                        ↘ Cloudinary (media)  
                        ↘ Stripe (payments)  
                        ↘ AI APIs (OpenAI / Replicate)
```

## 🚀 Deployment
```ts
1. Push repo to GitHub
2. Import into Vercel
3. Add environment variables
4. Deploy 🚀
```


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](../../issues).

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
