import React from 'react'
import Link from 'next/link'
import './styles.css'
const subjects = [
  { label: 'Linguistics', value: 'linguistics' },
  { label: 'Math', value: 'math' },
  { label: 'SOFTENG', value: 'softeng' },
]

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="subject-buttons">
        <Link href="/">
          <button className="home-button">Home</button>
        </Link>
        {subjects.map((subject) => (
          <Link key={subject.value} href={`/notes/${subject.value}`}>
            <button className="subject-button">{subject.label}</button>
          </Link>
        ))}
      </div>
    </div>
  )
}
