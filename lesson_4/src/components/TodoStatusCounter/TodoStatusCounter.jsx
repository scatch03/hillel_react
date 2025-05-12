import './style.scss'
import { STATUS_NAMES } from "../../services/statusService"


const TodoStatusCounter = ({status, todos}) => {
    const statusName = STATUS_NAMES[status]

    return (
        <h4 className='todo-panel__column-title'>
            {statusName}: &nbsp;
            {todos.length ? todos.filter(td => td.status === status).length : "--"}
        </h4>
    )
}

export default TodoStatusCounter