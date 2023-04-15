import './globals.css'
import "./styles.css"

export const metadata = {
  title: 'Document Creator',
  description: 'Built for creating elegant pages.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
