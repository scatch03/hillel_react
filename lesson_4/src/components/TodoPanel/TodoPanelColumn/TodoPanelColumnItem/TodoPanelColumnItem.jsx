import './style.scss'
import { getNextStatus, getPrevStatus, STATUS_NAMES } from "../../../../services/statusService"
import Button from '../../../Button/Button'
import { useContext } from 'react'
import TodoContext from '../../../../contexts/TodoContext'


const TodoPanelColumnItem = ({todoItem}) => {
    const { updateStatus } = useContext(TodoContext)

    const nextStatus = getNextStatus(todoItem.status)
    const prevStatus = getPrevStatus(todoItem.status)

    const handlePrevStatus = () => updateStatus(todoItem.id, prevStatus)
    const handleNextStatus = () => updateStatus(todoItem.id, nextStatus)

    return (
        <li className="todo-column__item">
            {todoItem.title}
            {prevStatus === todoItem.status ? null :
                <Button text={STATUS_NAMES[prevStatus]} onClick={handlePrevStatus} />}
            {nextStatus === todoItem.status ? null : 
                <Button text={STATUS_NAMES[nextStatus]} onClick={handleNextStatus} />}
        </li>
    )
}

export default TodoPanelColumnItem