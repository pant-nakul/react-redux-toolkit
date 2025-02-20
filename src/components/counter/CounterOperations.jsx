import React from 'react'
import {useDispatch} from "react-redux";
import {decrement, increment} from "../../features/todo/countSlice.js";

const CounterOperations = () => {

    const countDispatch = useDispatch()

    return (
        <div>
            <button onClick={() => countDispatch(increment())}>Increment</button>
            <button onClick={() => countDispatch(decrement())}>Decrement</button>
        </div>
    )
}
export default CounterOperations
