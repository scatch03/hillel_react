import { useCallback } from "react";

const OrderBy = ({onSelect}) => {

    const handleSelect = useCallback((e) => {
        onSelect && onSelect(e.target.value)
    }, [onSelect])

    return (
        <div className="order-by">
            <label htmlFor="order">Order by:</label>
            <select id="order" onChange={handleSelect}>
                <option value="id">id</option>
                <option value="name">name</option>
                <option value="username">username</option>
            </select>
        </div>
    )
}

export default OrderBy;
