import './style.scss'
import { ALLOWED_START_STATUSES } from '../../services/statusService'
import { objectToEntries } from '../../utils'
import { useCallback, useContext, useMemo } from 'react'
import { addTask } from '../../services/taskService'
import TodoContext from '../../contexts/TodoContext'
import CreateTodoContext from '../../contexts/CreateTodoContext'


const CreateTodoForm = () => {
    const {todo, status, handleTodoChange,  handleTodoStatusChange, reset} = useContext(CreateTodoContext)
    const {addTodo} = useContext(TodoContext)
   
    const statusEntries = useMemo(() => objectToEntries(ALLOWED_START_STATUSES), [])

    const handleFormSubmit = useCallback(async (e) => {
        e.preventDefault()
        const result = await addTask({title: todo, status})
        if (result) {
            addTodo({id: result.id, title: result.title, status: parseInt(result.status)})
            reset()
        }
    }, [todo, status, addTodo, reset])

    return (
        <fieldset className='add-todo'>
            <legend>Create task</legend>
            <form onSubmit={handleFormSubmit}>
                <input type='text' className='add-todo__text' value={todo} onChange={handleTodoChange}/>
                <select className='add-todo__status' value={status} onChange={handleTodoStatusChange}>
                    {
                        statusEntries ?
                            statusEntries.map(([key, value]) => <option key={key} value={key}>{value}</option>) : 
                            null
                    }
                </select>
                <input type='submit' className='add-todo__submit' defaultValue='Create task' />
            </form>
        </fieldset>    
    )
}

export default CreateTodoForm