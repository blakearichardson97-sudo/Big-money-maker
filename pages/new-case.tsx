import React from 'react'
import Header from '../../components/Header'

export default function NewCasePage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">New Case</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Title</label>
            <input className="border p-2 w-full" />
          </div>
          <div>
            <label className="block mb-1">Details</label>
            <textarea className="border p-2 w-full h-40" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Create Case</button>
        </form>
      </main>
    </div>
  )
}
