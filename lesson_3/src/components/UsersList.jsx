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
            setUsers(prevUsers => prevUsers.filter(u => u.id !== user.id))
        }
    }
    const handleUpdate = async (user, update) => {
        const success = await updateUser(user.id, update);
        if (success) {
            setUsers(prevUsers => prevUsers.map(u => u.id !== user.id ? u : {...u, ...update}))
        }
    }
    const handleChange = (user) => (evt) => setUsers(prevUsers => prevUsers.map(u => u.id === user.id ? {...u, name: evt.target.value} : u))

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
                                            Object.entries(user).map(([k, v]) => {
                                                    return (<tr key={`${user.id}-${k}`}>
                                                                <td className="key">{k}</td>
                                                                <td>
                                                                    {k === `name` ? 
                                                                       <input onChange={handleChange(user)} type="text" value={user.name} /> : v}
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