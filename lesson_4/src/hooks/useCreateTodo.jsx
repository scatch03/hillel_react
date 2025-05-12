import { useCallback, useState } from 'react'
import { STATUS_TODO } from '../services/statusService'


const useCreateTodo = () => {
    const [todo, setTodo] = useState(``)
    const [status, setStatus] = useState(STATUS_TODO)

    const handleTodoChange = useCallback((e) => setTodo(e.target.value), [])
    const handleTodoStatusChange = useCallback((e) => setStatus(e.target.value), [])
    const reset = useCallback(() => {
        setTodo(``)
        setStatus(STATUS_TODO)
    }, [])

    return {todo, status, handleTodoChange, handleTodoStatusChange, reset}

}

export default useCreateTodo