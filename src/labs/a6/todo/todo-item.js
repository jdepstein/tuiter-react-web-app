const TodoItem = (
    {
        todo = {
            done: true,
            title: 'Buy milk',
            status: 'COMPLETED'
        }
    }) => {
    return (
        <>
            <input type="checkbox"
                   defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </>
    );
}
export default TodoItem;