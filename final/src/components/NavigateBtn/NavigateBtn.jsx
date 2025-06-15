import { useNavigate, useLocation } from "react-router-dom";


export default function NavigateBtn({title, to, onClick}) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        onClick && onClick()
        navigate(to, { state: { from: location.pathname }})
    }

    return (
        <button className="cursor-pointer border-[1px] py-2 px-5 rounded-sm bg-gray-200 border-blue-50 hover:bg-gray-50" onClick={handleClick}>
            {title}
        </button>
    )
}