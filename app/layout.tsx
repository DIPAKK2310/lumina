import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "react-hot-toast";
import ReactLenis from "lenis/react";
import { inter, satoshi } from "./styles/fonts";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL('https://dipnext.vercel.app'),
  title: {
    default:
      'Lumina |The Intelligent Media Platform',
    template: '%s | Dipak Khare',
  },
  description:
    `Lumina AI is an AI-powered SaaS platform built with Next.js and Cloudinary,
It allows users to upload, transform, and optimize media with AI, while offering authentication, payments, and a modern UI.`,
  // keywords: [
  //   'Dipak Khare',
  //   'Full Stack Developer',
  //   'Next.js Developer',
  //   'MERN Stack',
  //   'React Developer',
  //   'Node.js Developer',
  //   'DevOps Engineer',
  //   'Docker',
  //   'Kubernetes',
  //   'GitHub Actions',
  // ],
  // alternates: {
  //   canonical: 'https://dipnext.vercel.app',
  // },
  // openGraph: {
  //   title: 'Dipak Khare | Full Stack Developer (Next.js, MERN) + DevOps',
  //   description:
  //     'Portfolio of Dipak Khare, a Full Stack Developer building scalable web apps using React, Next.js, Node.js, and DevOps practices.',
  //   url: 'https://dipnext.vercel.app',
  //   siteName: 'Dipak Khare',
  //   locale: 'en_IN',
  //   type: 'website',
  //   images: [
  //     {
  //       url: 'https://dipnext.vercel.app/meta/opengraph-image.png',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Dipak Khare Portfolio Preview',
  //     },
  //   ],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Dipak Khare | Full Stack Developer (Next.js, MERN) + DevOps',
  //   description:
  //     'Portfolio of Dipak Khare, a Full Stack Developer building scalable web apps using React, Next.js, Node.js, and DevOps practices.',
  //   images: ['https://dipnext.vercel.app/meta/opengraph-image.png'],
  // },
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en" suppressHydrationWarning={true}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${satoshi.variable} bg-[#000814] text-white antialiased `}
          >
            <ReactLenis>
              {children}
             
            </ReactLenis>
            <Toaster position="top-right" reverseOrder={false}/>
        </body>
      </html>
          </ClerkProvider>
  );
}
