import TableRow from "./TableRow"

const Table = ({data = []}) => {
    return (
        <table className="tbl">
            <tbody>
            {
                Array.isArray(data) && data.length ? 
                    data.map(row => <TableRow key={row.type} row={row}/>):
                    null
            }
            </tbody>
        </table>
    )
}

export default Table