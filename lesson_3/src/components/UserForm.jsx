import { useRef, useCallback, useState } from "react";
import { addUser } from "../services/userService";


const UserForm = ({setUsers}) => {
    const [validForm, setValidForm] = useState(false)
    const nameRef = useRef();

    const handleNameChange = useCallback(() => setValidForm(!!nameRef.current.value), [])
    const handleSubmit = useCallback(async (user) => {
        const result = await addUser(user);
        if (result){
            setUsers(prevUsers => [...prevUsers, result])
        }
    }, [setUsers])

    const onSubmit = useCallback((e) => {
        e.preventDefault()
        handleSubmit({name: nameRef.current.value})
        e.target.reset()
        setValidForm(false)
    }, [handleSubmit])

    return (
        <form className="user-form" onSubmit={onSubmit} >
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter name" ref={nameRef} onChange={handleNameChange}/>
            <input type="submit" value="Add" disabled={!validForm} />
            <input type="reset" value="Reset" />
        </form>    
    )
}


export default UserForm