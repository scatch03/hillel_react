import { Chip, Stack, Typography } from '@mui/material'
import { STATUS_NAMES } from "../../services/statusService"


const TodoStatusCounter = ({status, count}) => {
    const statusName = STATUS_NAMES[status]

    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1.5 }}>
            <Typography component='h3' variant='subtitle1'>
                {statusName}
            </Typography>
            <Chip label={count} size='small' color={count ? 'primary' : 'default'} />
        </Stack>
    )
}

export default TodoStatusCounter
