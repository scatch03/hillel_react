import { useContext } from 'react'
import { Card, CardContent, Divider, List, Typography } from '@mui/material'
import TodoContext from '../../../contexts/TodoContext'
import TodoStatusCounter from '../../TodoStatusCounter/TodoStatusCounter'
import TodoPanelColumnItem from './TodoPanelColumnItem/TodoPanelColumnItem'


const TodoPanelColumn = ({status}) => {
    const { todos } = useContext(TodoContext);
    const todosByStatus = todos.filter(td => td.status === status)

    return (
        <Card variant='outlined'>
            <CardContent>
                <TodoStatusCounter status={status} count={todosByStatus.length} />
                <Divider sx={{ mb: 1 }} />
                {todosByStatus.length ? (
                    <List disablePadding>
                        {todosByStatus.map(td => <TodoPanelColumnItem key={td.id} todoItem={td} />)}
                    </List>
                ) : (
                    <Typography variant='body2' color='text.secondary'>
                        No tasks in this column.
                    </Typography>
                )}
            </CardContent>
        </Card>
    )
}

export default TodoPanelColumn
