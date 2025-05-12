import './style.scss'
import TodoPanelColumn from './TodoPanelColumn/TodoPanelColumn'
import { VIEW_SEQUENCE } from '../../services/statusService'


const TodoPanel = () => {
    return (
        <div className='todo-panel'>
            {
                VIEW_SEQUENCE.map(status => <TodoPanelColumn key={status} status={status} />)
            }
        </div>
    )
}

export default TodoPanel