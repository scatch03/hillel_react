import { useCallback, useEffect, useState } from 'react'
import { getTasks, updateTask } from '../services/taskService'


const useTodos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTasks().then(tasks => setTodos(tasks))
    }, [])

    const updateStatus = useCallback(async (id, status) => {
       const result = await updateTask(id, {status});
       if (result) {
          setTodos(prev => prev.map(t => t.id === id ? {...t, status} : t))
       }
    }, [])

    const addTodo = useCallback((todo) => {
        if (todo) {
            setTodos(prev => [...prev, todo])
        }
    }, [])

    return {todos, updateStatus, addTodo}
}

export default useTodos