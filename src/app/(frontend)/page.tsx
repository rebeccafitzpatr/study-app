import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import Link from 'next/link'

const subjects = [
  { label: 'Linguistics', value: 'linguistics' },
  { label: 'Math', value: 'math' },
  { label: 'SOFTENG', value: 'softeng' },
]

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="home">
      <h1>Welcome to Rebecca&apos;s Study App</h1>
    </div>
  )
}
