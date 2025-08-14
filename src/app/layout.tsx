import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { VotingProvider } from '@/lib/voting-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GrittySystem - App Ecosystem Hub',
  description: 'Interactive landing page and investment opportunities for the GrittySystem app ecosystem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <VotingProvider>
          {children}
        </VotingProvider>
      </body>
    </html>
  )
}