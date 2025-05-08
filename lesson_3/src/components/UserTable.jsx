import UserTableRow from "./UserTableRow"

const UserTable = ({user, handleNameChange, caption=``}) => {
    return (
        <table className="user-card">
            {caption && <caption>{caption}</caption>}
            <tbody>
            {
                Object.entries(user).map(([key, _]) => {
                    return (
                        <UserTableRow key={`${user.id}-${key}`} 
                                      user={user} 
                                      rowKey={key} 
                                      handleNameChange={handleNameChange} />
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default UserTable