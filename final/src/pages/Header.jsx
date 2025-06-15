import Menu from "../components/Menu/Menu";
import { FaPlane } from "react-icons/fa";


export default function Header() {
    return (
        <header className="flex items-center justify-between min-w-full">
            <div className="flex justify-center items-center gap-2">
                <FaPlane className="w-[35px] h-[35px] flex justify-center items-center rotate-315" />
                <span className="text-3xl font-semibold text-indigo-500 text-shadow-md text-shadow-blue-300">BusyFly</span>
            </div>
            <Menu />
        </header>
    )
}