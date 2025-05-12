import useTodos from '../hooks/useTodos'
import TodoContext  from './TodoContext';


const TodoContextProvider = ({children}) => {
    const {todos, updateStatus, addTodo} = useTodos();

    return (
        <TodoContext.Provider value = {{todos, updateStatus, addTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider