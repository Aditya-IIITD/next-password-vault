'use client'

import { Ban } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4 text-center">
      <Ban className="w-12 h-12 text-gray-500" aria-hidden="true" />
      <h1 className="text-2xl font-semibold text-gray-800">
        404 – Page Not Found
      </h1>
      <p className="text-gray-600">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
    </div>
  )
}
