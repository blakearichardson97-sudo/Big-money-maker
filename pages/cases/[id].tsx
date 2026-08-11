import React from 'react'
import Header from '../../components/Header'

export default function CaseDetailPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Case Detail</h2>
        <div className="border p-4 rounded">
          <h3 className="text-xl font-semibold">Case Title</h3>
          <p className="text-sm text-gray-600">Case metadata</p>
          <div className="mt-4">
            <h4 className="font-semibold">Prediction</h4>
            <p>Loading prediction...</p>
          </div>
        </div>
      </main>
    </div>
  )
}
