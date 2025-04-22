import TableRow from './TableRow'
import './App.css'

function App({title, groups}) {
  return (
    <table border="1" className="tbl">
      <caption className="tbl-caption">{title}</caption>
      { 
        Array.isArray(groups) && groups.length ? 
            groups.map(group => <TableRow group={group} />) 
            : null
      }
    </table>
  )
}

export default App
