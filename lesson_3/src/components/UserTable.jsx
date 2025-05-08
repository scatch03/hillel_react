import UserTableRow from "./UserTableRow"

const UserTable = ({user, handleNameChange, color=`#000`, caption=``}) => {
    return (
        <table className="user-card" style={{color}}>
            {caption && <caption>{caption}</caption>}
            <tbody>
            {
                Object.entries(user).map(([key, _]) => {
                    return (
                        <UserTableRow key={`${user.id}-${key}`} 
                                      user={user} 
                                      rowKey={key} 
                                      color={color}
                                      handleNameChange={handleNameChange} />
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default UserTable