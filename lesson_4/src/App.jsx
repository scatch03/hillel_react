import './App.css'
import CreateTodoForm from './components/CreateTodoForm/CreateTodoForm'
import TodoPanel from './components/TodoPanel/TodoPanel'
import CreateTodoContextProvider from './contexts/CreateTodoContextProvider'
import TodoContextProvider from './contexts/TodoContextProvider'


function App() {
  return (
    <>
      <TodoContextProvider>
        <CreateTodoContextProvider>
          <CreateTodoForm />
        </CreateTodoContextProvider>
        <TodoPanel />
      </TodoContextProvider>
    </>
  )
}

export default App
