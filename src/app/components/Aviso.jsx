'use client'
import { useState } from 'react'

export default function AvisoDemo() {
  const [open, setOpen] = useState(true)

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      
      <div className="bg-white rounded-xl p-6 max-w-sm text-center shadow-lg">
        <h2 className="text-lg font-bold mb-2">⚠️ Aviso</h2>
        
        <p className="text-gray-700 mb-4">
          Este site é apenas um demonstrativo de portfólio. Nenhum serviço é real.
        </p>

        <button
          onClick={() => setOpen(false)}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          OK
        </button>
      </div>

    </div>
  )
}