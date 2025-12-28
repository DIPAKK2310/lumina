import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "react-hot-toast";
import ReactLenis from "lenis/react";
import { inter, satoshi } from "./styles/fonts";

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
          className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${satoshi.variable} antialiased`}
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
