import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from "./components/Todos.jsx";
import AddTodos from "./components/AddTodos.jsx";

function App() {

  return (
    <>
        <AddTodos/>
        <br/>
        <Todos/>
    </>
  )
}

export default App
