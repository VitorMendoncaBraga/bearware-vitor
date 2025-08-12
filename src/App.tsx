import React from 'react'
import RoutesLayout from './pages/layouts/RoutesLayout'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesLayout />
    </QueryClientProvider>
  )
}
