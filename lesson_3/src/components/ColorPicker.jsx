import { useCallback, useState } from "react"


const ColorPicker = ({onColorChange}) => {
    const [color, setColor] = useState(`#000`)

    const handleChangeColor = useCallback((e) => {
        const newColor = e.target.value
        if (color === newColor){
            return
        }
        setColor(newColor)
        onColorChange && onColorChange(newColor)
    }, [setColor, onColorChange, color])

    return (
        <div className="color-picker">
            <label htmlFor="color">Select color: </label>
            <input type="color" defaultValue={color} onChange={handleChangeColor} />
        </div>
    )
}

export default ColorPicker