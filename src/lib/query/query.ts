import { QueryClient } from '@tanstack/react-query'
import { useState } from 'react'

export function useQueryClient() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60000, // 5min
            refetchOnWindowFocus: false,
          },
        },
      }),
  )

  return queryClient
}
