import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

const getUsers = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        console.error('Failed to fetch users:', error)
        return null
    }
};

const updateUser = async (userId, update) => {
    try {
        const response = await axios.patch(`${API_URL}/${userId}`, update, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.data
    } catch (error) {
        console.error('Update user failed:', error)
        return null
    }
};

const addUser = async (user) => {
    try {
        const response = await axios.post(`${API_URL}`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.data
    } catch (error) {
        console.error('Add user failed:', error)
        return null
    }
};

const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/${userId}`)
        return response.status === 200 || response.status === 204
    } catch (error) {
        console.error('Failed to delete user:', error)
        return false
    }
};

export { getUsers, addUser, updateUser, deleteUser }