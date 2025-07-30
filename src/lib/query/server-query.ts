import { dehydrate, QueryClient } from '@tanstack/react-query'

export async function preFetchQueries() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      return response.json()
    },
  })

  return dehydrate(queryClient)
}
