const TableRow = ({row :{type, icon, active=false}}) => {
    return (
        <tr>
            <td className={active ? `active` : null}>{type}</td>
            <td>{icon}</td>
        </tr>
    )
}

export default TableRow