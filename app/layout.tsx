import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FocusBreak — Smart Break Timer for Students',
  description: 'Adaptive break timer that learns your focus patterns and suggests optimal breaks based on subject difficulty and personal productivity rhythms.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0ae2640b-5d44-4680-ad8c-01d3e524f7e6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
