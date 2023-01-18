import React from 'react';

const Todo = ({id, text, deleteTodo}) => {
    return (
        <>
            <li> {text} </li>
            <button onClick={() => deleteTodo(id)}> ❌ </button>
        </>
    )
}

export default Todo;