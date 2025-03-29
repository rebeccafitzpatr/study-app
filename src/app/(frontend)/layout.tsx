import React from 'react'
import './styles.css'
import Navbar from './components/Navbar'

export const metadata = {
  description: 'Rebecca&apos;s Study App',
  title: 'studyapp',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
