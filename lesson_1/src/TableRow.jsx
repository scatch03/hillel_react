
function TableRow({group}) {
    return (
      <>
        { group ? <tr>
            { group.category ? <th className="category"> {group.category} </th> : null }
            { Array.isArray(group.animals) && group.animals.length ? 
                group.animals.map(animal => <td style={{color: animal.color}}>{animal.name}</td>) : null }
        </tr> : null }
      </>
    )
  }
  
  export default TableRow