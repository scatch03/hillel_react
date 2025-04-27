import './App.css'
import Table from './components/Table'
import data from './assets/data'
import { useState, useEffect } from 'react'


function App() {
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
    <Table data={tableData} />
  )
}

export default App
