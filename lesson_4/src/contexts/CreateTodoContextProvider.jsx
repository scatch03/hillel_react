import useCreateTodo from "../hooks/useCreateTodo";
import CreateTodoContext  from './CreateTodoContext';


const CreateTodoContextProvider = ({children}) => {
    const context = useCreateTodo();

    return (
        <CreateTodoContext.Provider value = {context}>
            {children}
        </CreateTodoContext.Provider>
    )
}

export default CreateTodoContextProvider