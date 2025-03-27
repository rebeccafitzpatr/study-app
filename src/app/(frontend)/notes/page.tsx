import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'

export default async function LinguisticsPage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const notes = await payload.find({
    collection: 'notes',
    where: {
      subject: {
        equals: 'linguistics',
      },
    },
  })
  return (
    <div>
      <h1>Linguistics Notes</h1>
      <ul>
        {notes.docs.map(
          (note) => (
            console.log(note.content),
            (
              <li key={note.id}>
                <h2>{note.title}</h2>
                {note.content && <RichText data={note.content} />}
              </li>
            )
          ),
        )}
      </ul>
    </div>
  )
}
