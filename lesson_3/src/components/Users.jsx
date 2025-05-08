import { useState, useEffect, useCallback } from "react"
import { deleteUser, getUsers, updateUser } from "../services/userService"
import { deepEntries, pairsToObj } from "../utils/util"
import UserForm from "./UserForm"
import UserTable from "./UserTable"
import Button from "./Button"
import ColorPicker from "./ColorPicker"


const Users = () => {
    const [users, setUsers] = useState([])
    const [tableColor, setTableColor] = useState(`#000`)

    useEffect(() => {
        getUsers()
        .then(userList => setUsers(userList))
    }, [])

    const handleDelete = useCallback(async (user) => {
        const success = await deleteUser(user.id);
        if (success) {
            setUsers(prevUsers => prevUsers.filter(usr => usr.id !== user.id))
        }
    }, [])
    const handleUpdate = useCallback(async (user, update) => {
        const success = await updateUser(user.id, update);
        if (success) {
            setUsers(prevUsers => prevUsers.map(usr => usr.id !== user.id ? usr : {...usr, ...update}))
        }
    }, [])
    const handleNameChange = useCallback(
        (user) => (evt) => setUsers(prevUsers => prevUsers.map(usr => usr.id === user.id ? {...usr, name: evt.target.value} : usr)),
    [])

    return (
        <>
            <UserForm setUsers={setUsers} />
            <ColorPicker onColorChange={setTableColor} />
            <div>
                {
                    Array.isArray(users) && users.length ? 
                        users.map(user => deepEntries(user))
                             .map(user => pairsToObj(user))
                             .map(user => 
                                <div className="user-data" key={user.id}>
                                    <UserTable color={tableColor} user={user} handleNameChange={handleNameChange} />
                                    <div className="actions">
                                        <Button text="Delete" onClick={() => handleDelete(user)} />
                                        <Button text="Update" onClick={() => handleUpdate(user, {name: user.name})} />
                                    </div>
                                </div>)
                        : null
                }
            </div>
        </>
    )
}

export default Users