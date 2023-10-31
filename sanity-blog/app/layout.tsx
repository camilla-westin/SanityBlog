import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sanity Blog',
  description: 'A blog website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-pink">
        <Header />
        {children}
      </body>
    </html>
  )
}
