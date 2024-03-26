import TopMenuItem from '@/components/TopMenuItem'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import NextAuth, { getServerSession } from 'next-auth'
import NextAuthProvider from '@/providers/NextAuthProvider'
import { SessionProvider } from 'next-auth/react'
import { options } from './api/auth/[...nextauth]/option'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nextAuthSession = await getServerSession(options) ;
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session = {nextAuthSession}>
          <TopMenuItem/>
            {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
