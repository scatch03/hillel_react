import { Box } from '@mui/material'
import TodoPanelColumn from './TodoPanelColumn/TodoPanelColumn'
import { VIEW_SEQUENCE } from '../../services/statusService'


const TodoPanel = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: {
                    xs: '1fr',
                    lg: `repeat(${VIEW_SEQUENCE.length}, minmax(0, 1fr))`,
                },
            }}
        >
            {
                VIEW_SEQUENCE.map(status => <TodoPanelColumn key={status} status={status} />)
            }
        </Box>
    )
}

export default TodoPanel
