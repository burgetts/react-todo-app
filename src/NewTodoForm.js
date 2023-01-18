import React, { useState } from 'react';

const NewTodoForm = ({addTodo}) => {
    const initialState = {
        text: ''
    }
    const [formData, setFormData] = useState(initialState)
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(formData)
        setFormData(initialState)
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="text">To do:</label>
                <input
                    id = "text"
                    type="text"
                    name="text"
                    placeholder = "What do you need to do?"
                    value = {formData.text}
                    onChange = {handleChange}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewTodoForm;