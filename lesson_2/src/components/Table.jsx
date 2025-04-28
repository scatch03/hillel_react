import TableRow from "./TableRow"
import data from '../assets/data'
import { useState, useEffect } from 'react'

const Table = () => {
    const [tableData, setTableData] = useState(structuredClone(data))

    useEffect(() => {
      const intervalId = setInterval(() => {
          const notActiveData = tableData.filter(data => !data.active)
          if (notActiveData.length) {
            const selectedData = notActiveData[Math.floor(Math.random()*notActiveData.length)]
            selectedData.active = true;
            const notActiveDataIndex = tableData.findIndex(data => data.type == selectedData.type &&
              data.icon == selectedData.icon)
            const newTableData = tableData.map((el, index) => index === notActiveDataIndex ? selectedData : el);
            setTableData(newTableData)
            console.log(`Updated another row.`)
          } else {
            clearInterval(intervalId);
            console.log(`Stop updates.`)
          }
      }, 1000)
    }, [])

    return (
        <table className="tbl">
            <tbody>
            {
                Array.isArray(tableData) && tableData.length ? 
                tableData.map(row => <TableRow key={row.type} row={row}/>):
                    null
            }
            </tbody>
        </table>
    )
}

export default Table