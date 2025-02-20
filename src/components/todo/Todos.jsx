import React from 'react'

import {useSelector, useDispatch} from "react-redux";
import {removeTodo} from "../../features/todo/todoSlice.js";

const Todos = () => {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Todos</h1>
            {
                todos.map(todo => {
                        return (
                            <>
                                <li key={todo.id}>{todo.text} &nbsp;&nbsp;
                                    <button
                                        onClick={() => {
                                            dispatch(removeTodo(todo.id))
                                        }}
                                    >X</button>
                                </li>

                            </>
                        )
                    }
                )
            }</>
    )
}
export default Todos
