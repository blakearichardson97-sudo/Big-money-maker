import React from 'react'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-lg font-semibold">Big Money Maker</h1>
        <nav>
          <a href="/" className="mr-4">Home</a>
          <a href="/new-case" className="mr-4">New Case</a>
          <a href="/pricing" className="mr-4">Pricing</a>
          <a href="/sponsor-signup">Sponsor Signup</a>
        </nav>
      </div>
    </header>
  )
}
