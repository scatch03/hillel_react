import { useState, useEffect } from "react"
import { deleteUser, getUsers, updateUser } from "../api"
import { deepEntries, pairsToObj } from "../util"


const UsersList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
        .then(userList => setUsers(userList))
    }, [])

    const handleDelete = async (user) => {
        const success = await deleteUser(user.id);
        if (success) {
            setUsers(prevUsers => prevUsers.filter(usr => usr.id !== user.id))
        }
    }
    const handleUpdate = async (user, update) => {
        const success = await updateUser(user.id, update);
        if (success) {
            setUsers(prevUsers => prevUsers.map(usr => usr.id !== user.id ? usr : {...usr, ...update}))
        }
    }
    const handleNameChange = (user) => (evt) => setUsers(prevUsers => prevUsers.map(usr => usr.id === user.id ? {...usr, name: evt.target.value} : usr))

    return (
        <div>
            {
                Array.isArray(users) && users.length ? 
                    users.map(user => deepEntries(user))
                         .map(user => pairsToObj(user))
                         .map(user => 
                            <div className="user-card" key={user.id}>
                                <table>
                                    <tbody>
                                        {
                                            Object.entries(user).map(([key, value]) => {
                                                    return (<tr key={`${user.id}-${key}`}>
                                                                <td className="key">{key}</td>
                                                                <td>
                                                                    {key === `name` ? <input onChange={handleNameChange(user)} type="text" value={user.name} /> : value}
                                                                </td>
                                                            </tr>)
                                                })
                                        }
                                    </tbody>
                                </table>
                                <div className="actions">
                                    <button onClick={() => handleDelete(user)}>Delete</button>
                                    <button onClick={() => handleUpdate(user, {name: user.name})}>Update</button>
                                </div>
                            </div>)
                    : null
            }
        </div>
    )
}

export default UsersList