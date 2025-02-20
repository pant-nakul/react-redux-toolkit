import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from "./components/todo/Todos.jsx";
import AddTodos from "./components/todo/AddTodos.jsx";
import Count from "./components/counter/Count.jsx";
import CounterOperations from "./components/counter/CounterOperations.jsx";

function App() {

  return (
    <>
        <>
        <Count/>
            <CounterOperations/>
        </>
        <>
            <AddTodos/>
            <br/>
            <Todos/>
        </>
    </>
  )
}

export default App
