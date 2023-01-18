import React, { useState } from 'react';
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import { v4 as uuid } from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (newTodo) => {
        const newTodos = [...todos, {...newTodo, id: uuid()}]
        setTodos(newTodos)
    }
    const deleteTodo = (idToDelete) => {
        const newTodos = todos.filter(todo => todo.id !== idToDelete)
        setTodos(newTodos)
    }
    return (
        <>
            <h2> Add New Todo </h2>
            <NewTodoForm addTodo = {addTodo} />
            <h2> To Do List </h2>
            <ul>
                {todos.map(todo => <Todo id={todo.id} key={todo.id} text={todo.text} deleteTodo = {deleteTodo} />)}
            </ul>
        </>
    )
}

export default TodoList;