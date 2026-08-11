import React from 'react'
import Header from '../components/Header'

export default function SponsorSignupPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Sponsor Signup</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Organization Name</label>
            <input className="border p-2 w-full" />
          </div>
          <div>
            <label className="block mb-1">Description</label>
            <textarea className="border p-2 w-full h-24" />
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Create Sponsor Profile</button>
        </form>
      </main>
    </div>
  )
}
