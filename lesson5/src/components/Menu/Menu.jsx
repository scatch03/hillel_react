import { NavLink } from "react-router-dom"
import './style.scss'

function Menu() {
    return (
        <nav className="p-4 mt-2 mb-4 flex flex-wrap justify-center gap-6 bg-gray-100 rounded-4xl">
            <NavLink to="/" className="text-blue-600 font-700 uppercase">Home</NavLink>
            <NavLink to="/countries" className="text-blue-600 font-700 uppercase">Countries</NavLink>
        </nav>
    )
}

export default Menu

