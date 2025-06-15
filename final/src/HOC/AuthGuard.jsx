import { useNavigate } from "react-router-dom";
import useLocalStorage from '../hooks/useLocalStorage'
import { useEffect } from "react";


export default function AuthGuard({children}) {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useLocalStorage('loggedIn', false)

    useEffect(() => {
        !loggedIn && navigate(`/login`)
    }, [])

    return (
        <>
            {loggedIn ? children : null}
        </>
    )
}