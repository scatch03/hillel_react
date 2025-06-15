import NavigateBtn from "../NavigateBtn/NavigateBtn";
import useLocalStorage from '../../hooks/useLocalStorage'
import { useLocation } from "react-router-dom";


export default function Menu() {
    const [loggedIn, setLoggedIn] = useLocalStorage('loggedIn', false)
    const location = useLocation();

    return (
        <nav className="py-5">
            <ul className="list-none flex gap-1 flex-row-reverse">
                {
                    loggedIn && (
                    <li>
                        <NavigateBtn title={`Logout`} to={`/login`} onClick={() => setLoggedIn(false)} />
                    </li>)
                }
                {
                    location.pathname !== '/' && (
                    <li>
                        <NavigateBtn title={`Flights`} to={`/`} />
                    </li>)
                }
            </ul>
        </nav>
    )
}