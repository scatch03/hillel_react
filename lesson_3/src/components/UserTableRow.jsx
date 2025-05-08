
const UserTableRow = ({user, rowKey: key, handleNameChange}) => {
    return (
        <tr>
            <td className="key">{key}</td>
            <td>
                {key === `name` ? 
                    <input onChange={handleNameChange(user)} type="text" value={user.name} /> :
                    user[key]}
            </td>
        </tr>
    )
}

export default UserTableRow