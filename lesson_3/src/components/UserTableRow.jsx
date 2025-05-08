
const UserTableRow = ({user, rowKey: key, handleNameChange, color=`#000`}) => {
    return (
        <tr>
            <td className="key">{key}</td>
            <td>
                {key === `name` ? 
                    <input onChange={handleNameChange(user)} type="text" value={user.name} style={{color}} /> :
                    user[key]}
            </td>
        </tr>
    )
}

export default UserTableRow