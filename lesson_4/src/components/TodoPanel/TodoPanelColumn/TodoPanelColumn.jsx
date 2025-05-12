import './style.scss'
import { useContext } from 'react'
import TodoContext from '../../../contexts/TodoContext'
import TodoStatusCounter from '../../TodoStatusCounter/TodoStatusCounter'
import TodoPanelColumnItem from './TodoPanelColumnItem/TodoPanelColumnItem'


const TodoPanelColumn = ({status}) => {
    const { todos } = useContext(TodoContext);

    return (
        <div className="todo-panel__column">
            <TodoStatusCounter status={status} todos={todos} />
            <ul className='todo-panel__list'>
            {
                todos
                    .filter(td => td.status === status)
                    .map(td => <TodoPanelColumnItem key={td.id} todoItem={td} />)
            }
            </ul>
        </div>
    )
}

export default TodoPanelColumn