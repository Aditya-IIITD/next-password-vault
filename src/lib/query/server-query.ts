import { dehydrate, QueryClient } from '@tanstack/react-query'

export async function preFetchQueries() {
  //Fetching the query client
  const queryClient = new QueryClient()

  //Prefetching the queries
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts'),
  })

  return dehydrate(queryClient)
}
