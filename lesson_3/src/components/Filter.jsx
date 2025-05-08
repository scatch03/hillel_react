import { useCallback, useState } from "react";

const Filter = ({onChange}) => {
    const [filter, setFilter] = useState('')

    const handleChange = useCallback((e) => {
        setFilter(e.target.value)
        onChange && onChange(e.target.value)
    }, [onChange])

    return (
        <div className="filter">
            <label htmlFor="filter">Filter:</label>
            <input id="filter" type="text" defaultValue={filter} onChange={handleChange} />
        </div>
    )
}

export default Filter;
