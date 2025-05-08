import { useState, useEffect, useCallback } from "react"
import { deleteUser, getUsers, updateUser } from "../services/userService"
import { equalById, deepEntries, pairsToObj } from "../utils/util"
import UserForm from "./UserForm"
import UserTable from "./UserTable"
import Button from "./Button"
import ColorPicker from "./ColorPicker"
import OrderBy from "./OrderBy"
import Filter from "./Filter"


const Users = () => {
    const [users, setUsers] = useState([])
    const [tableColor, setTableColor] = useState(`#000`)
    const [tableOrdering, setTableOrdering] = useState(`id`)
    const [tableFilter, setTableFilter] = useState(``)
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        getUsers().then(userList => setUsers(userList))
    }, [])
    useEffect(() => {
        setFilteredUsers(prevFilteredUsers => {
            const filteredUsers = users.filter(user => 
                !tableFilter || 
                (user.name && user.name.includes(tableFilter)) || 
                (user.username && user.username.includes(tableFilter)))
            if (equalById(prevFilteredUsers, filteredUsers)){
                return prevFilteredUsers
            }
            return [...filteredUsers]
        })
    }, [users, tableFilter])
    useEffect(() => {
        setUsers(prevUsers => {
            const prevUsersClone = [...prevUsers]
            prevUsers.sort((a, b) => {
                const valA = a[tableOrdering];
                const valB = b[tableOrdering];
                if (typeof valA === "string" && typeof valB === "string") {
                    return valA.localeCompare(valB);
                }
                return valA > valB ? 1 : valA < valB ? -1 : 0;
            })
            if (equalById(prevUsersClone, prevUsers)){
                return prevUsers
            }
            return [...prevUsers]
        })
    }, [tableOrdering, users])

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
            <OrderBy onSelect={setTableOrdering} />
            <Filter onChange={setTableFilter} />
            <div>
                {
                    Array.isArray(filteredUsers) && filteredUsers.length ? 
                        filteredUsers.map(user => deepEntries(user))
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