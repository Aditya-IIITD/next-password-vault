'use client'

import { AlertTriangle } from 'lucide-react'

export default function GlobalError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4 text-center">
      <AlertTriangle className="w-12 h-12 text-red-500" aria-hidden="true" />
      <h1 className="text-2xl font-semibold text-red-600">
        Something went wrong
      </h1>
      <p className="text-gray-600">
        An unexpected error occurred. Please try refreshing the page or come
        back later.
      </p>
    </div>
  )
}
