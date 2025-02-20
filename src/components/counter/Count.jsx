import React from 'react'
import {useSelector} from "react-redux";

const Count = () => {
    const count = useSelector(state => state.counter)
    return (
        <div>
            <h1>Count is {count.count}</h1>
            <br/>
            <br/>
        </div>
    )
}
export default Count
