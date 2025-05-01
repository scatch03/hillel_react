const API_URL = 'https://jsonplaceholder.typicode.com/users'

const getUsers = async () => {
    try {
        const usersResp = await fetch(API_URL)
        if (!usersResp.ok) {
            const errorData = await usersResp.json()
            console.error('Failed to fetch users:', errorData)
            return null
        }
        return await usersResp.json()
    } catch (err) {
        console.log(err)
        return null;
    }
}

const updateUser = async (userId, update) => {
    try {
        const updateUserResp = await fetch(`${API_URL}/${userId}`, {
            method: `PATCH`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(update)
        })
        if (!updateUserResp.ok) {
            const errorData = await updateUserResp.json()
            console.error('Update user failed:', errorData)
            return null
        }
        return await updateUserResp.json()
    } catch (err) {
        console.log(err)
        return null;
    }
}

const deleteUser = async (userId) => {
    try {
        const deleteUserResp = await fetch(`${API_URL}/${userId}`, {
            method: `DELETE`
        })
        return deleteUserResp.ok
    } catch (err) {
        console.log(err)
        return false;
    }
}

export {getUsers, updateUser, deleteUser}