import axios from 'axios'

const API_URL = `https://682210e6b342dce8004cf8c7.mockapi.io/todos`

const getTasks = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        console.error('Failed to fetch tasks:', error)
        return null
    }
};

const updateTask = async (taskId, update) => {
    try {
        const response = await axios.put(`${API_URL}/${taskId}`, update, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.data
    } catch (error) {
        console.error('Update task failed:', error)
        return null
    }
};

const addTask = async (task) => {
    try {
        const response = await axios.post(`${API_URL}`, task, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.data
    } catch (error) {
        console.error('Add task failed:', error)
        return null
    }
};

const deleteTask = async (taskId) => {
    try {
        const response = await axios.delete(`${API_URL}/${taskId}`)
        return response.status === 200 || response.status === 204
    } catch (error) {
        console.error('Failed to delete task:', error)
        return false
    }
};

export { getTasks, addTask, updateTask, deleteTask }