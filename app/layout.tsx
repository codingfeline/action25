import { Container, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import AuthProvider from './auth/Provider'
import AppFooter from './components/appFooter'
import AppHeader from './components/appHeader'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Action Consultancy Service',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/A.png" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col  `}
      >
        <AuthProvider>
          <Theme accentColor="blue" className="mb-auto flex flex-col  ">
            <AppHeader />
            <main className="grow p-8 ">
              <Container>{children}</Container>
            </main>
            <AppFooter />
          </Theme>
        </AuthProvider>
      </body>
    </html>
  )
}
