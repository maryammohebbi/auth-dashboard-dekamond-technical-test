
import { AuthProvider } from './context/AuthContext'
import './globals.scss'

export const metadata = {
  title: 'Auth Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
