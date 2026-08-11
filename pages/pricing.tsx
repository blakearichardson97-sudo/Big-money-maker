import React from 'react'
import Header from '../components/Header'

export default function PricingPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Free</h3>
            <p className="mt-2">Basic access</p>
            <button className="mt-4 bg-gray-200 px-3 py-1 rounded">Choose</button>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Pro</h3>
            <p className="mt-2">Advanced features</p>
            <button className="mt-4 bg-blue-600 text-white px-3 py-1 rounded">Choose</button>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Sponsor</h3>
            <p className="mt-2">Sponsor marketplace listing</p>
            <button className="mt-4 bg-green-600 text-white px-3 py-1 rounded">Choose</button>
          </div>
        </div>
      </main>
    </div>
  )
}
