
import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DraftPilot',
  description: 'Fantasy football draft simulator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-bg text-brand-text">
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-brand.primary/20 flex items-center justify-center">
              <span className="text-sm font-bold">DP</span>
            </div>
            <div className="font-semibold tracking-tight">DraftPilot</div>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  )
}
