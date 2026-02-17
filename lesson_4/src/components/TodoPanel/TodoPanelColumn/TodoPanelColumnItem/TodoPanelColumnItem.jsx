import { useContext } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Button, ListItem, ListItemText, Stack } from '@mui/material'
import TodoContext from '../../../../contexts/TodoContext'
import { getNextStatus, getPrevStatus, STATUS_NAMES } from "../../../../services/statusService"


const TodoPanelColumnItem = ({todoItem}) => {
    const { updateStatus } = useContext(TodoContext)

    const nextStatus = getNextStatus(todoItem.status)
    const prevStatus = getPrevStatus(todoItem.status)

    const handlePrevStatus = () => updateStatus(todoItem.id, prevStatus)
    const handleNextStatus = () => updateStatus(todoItem.id, nextStatus)

    return (
        <ListItem divider disableGutters sx={{ py: 1.5 }}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                justifyContent='space-between'
                alignItems={{ sm: 'center' }}
                sx={{ width: '100%' }}
            >
                <ListItemText
                    primary={todoItem.title}
                    primaryTypographyProps={{ variant: 'body1' }}
                    sx={{ my: 0 }}
                />
                <Stack direction='row' spacing={1}>
                    {prevStatus === todoItem.status ? null : (
                        <Button
                            size='small'
                            variant='outlined'
                            onClick={handlePrevStatus}
                            startIcon={<ArrowBackIosNewIcon fontSize='inherit' />}
                            sx={{ fontSize: '0.65rem' }}
                        >
                            {STATUS_NAMES[prevStatus]}
                        </Button>
                    )}
                    {nextStatus === todoItem.status ? null : (
                        <Button
                            size='small'
                            variant='contained'
                            onClick={handleNextStatus}
                            endIcon={<ArrowForwardIosIcon fontSize='inherit' />}
                            sx={{ fontSize: '0.65rem' }}
                        >
                            {STATUS_NAMES[nextStatus]}
                        </Button>
                    )}
                </Stack>
            </Stack>
        </ListItem>
    )
}

export default TodoPanelColumnItem
