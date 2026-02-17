import { useCallback, useContext, useMemo } from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask'
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { addTask } from '../../services/taskService'
import TodoContext from '../../contexts/TodoContext'
import CreateTodoContext from '../../contexts/CreateTodoContext'
import { ALLOWED_START_STATUSES } from '../../services/statusService'
import { objectToEntries } from '../../utils'


const CreateTodoForm = () => {
    const {todo, status, handleTodoChange,  handleTodoStatusChange, reset} = useContext(CreateTodoContext)
    const {addTodo} = useContext(TodoContext)
   
    const statusEntries = useMemo(() => objectToEntries(ALLOWED_START_STATUSES), [])
    const isSubmitDisabled = useMemo(() => !todo.trim(), [todo])
    const selectedStatus = useMemo(() => String(status), [status])

    const handleFormSubmit = useCallback(async (e) => {
        e.preventDefault()
        const result = await addTask({title: todo.trim(), status: parseInt(status, 10)})
        if (result) {
            addTodo({id: result.id, title: result.title, status: parseInt(result.status, 10)})
            reset()
        }
    }, [todo, status, addTodo, reset])

    return (
        <Paper elevation={2} sx={{ p: 3 }}>
            <Typography component='h2' variant='h6' gutterBottom>
                Create task
            </Typography>
            <Box component='form' onSubmit={handleFormSubmit}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ md: 'center' }}>
                    <TextField
                        label='Task title'
                        value={todo}
                        onChange={handleTodoChange}
                        fullWidth
                        required
                    />
                    <FormControl sx={{ minWidth: 180 }}>
                        <InputLabel id='new-task-status-label'>Status</InputLabel>
                        <Select
                            labelId='new-task-status-label'
                            value={selectedStatus}
                            label='Status'
                            onChange={handleTodoStatusChange}
                        >
                            {statusEntries.map(([key, value]) => (
                                <MenuItem key={key} value={String(key)}>
                                    {value}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button
                        type='submit'
                        variant='contained'
                        startIcon={<AddTaskIcon />}
                        disabled={isSubmitDisabled}
                        sx={{
                            whiteSpace: 'nowrap',
                            px: 3.25,
                            py: 1.35,
                        }}
                    >
                        Create task
                    </Button>
                </Stack>
            </Box>
        </Paper>
    )
}

export default CreateTodoForm
