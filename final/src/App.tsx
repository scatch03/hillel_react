import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider} from '@tanstack/react-query'
import queryClient from './api/queryClient'
import router from './routes/routes'
import './App.css'


function App() {  
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
