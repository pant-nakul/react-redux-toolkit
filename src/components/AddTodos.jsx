import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {addTodo} from "../features/todo/todoSlice.js";

const AddTodos = () => {
    const [input, setInput] = useState('')

    const todoDispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        todoDispatch(addTodo(input));
        setInput('');
    }

    return (
        <div>
            <h2> Add Todo</h2>
            <br/>
            <form onSubmit={addTodoHandler}>
                <input type={'text'}
                       value={input} onChange={e => setInput(e.target.value)}
                />
                <br/>
                <br/>
                <button type="submit">Add</button>
            </form>

        </div>
    )

}
export default AddTodos
