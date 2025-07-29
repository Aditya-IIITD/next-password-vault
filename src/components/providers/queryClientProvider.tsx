'use client'

//Imports
import { QueryClientProvider, HydrationBoundary } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

//Local Imports
import { useQueryClient } from '@lib/query/query'
import React from 'react'

export function QueryProvider({
  children,
  dehydratedState,
}: {
  children: React.ReactNode
  dehydratedState: unknown
}) {
  const queryClient = useQueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}
