import { Box, Container, Stack, Typography } from '@mui/material'
import CreateTodoForm from './components/CreateTodoForm/CreateTodoForm'
import TodoPanel from './components/TodoPanel/TodoPanel'
import CreateTodoContextProvider from './contexts/CreateTodoContextProvider'
import TodoContextProvider from './contexts/TodoContextProvider'


function App() {
  return (
    <TodoContextProvider>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Stack spacing={3}>
          <Box>
            <Typography component="h1" variant="h4" gutterBottom>
              Task Board
            </Typography>
            <Typography color="text.secondary">
              Track todos with a convenient workflow.
            </Typography>
          </Box>
          <CreateTodoContextProvider>
            <CreateTodoForm />
          </CreateTodoContextProvider>
          <TodoPanel />
        </Stack>
      </Container>
    </TodoContextProvider>
  )
}

export default App
