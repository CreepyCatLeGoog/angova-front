import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: `An'gova`,
  description: 'Code de la Route',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
