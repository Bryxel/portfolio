import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
