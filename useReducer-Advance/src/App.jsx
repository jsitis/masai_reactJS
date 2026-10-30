import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import TodoApp1 from './components/TodoApp1'
import TodoApp2 from './components/TodoApp2'
import FetchData from './components/FetchData'
import FormWithUseReducer from './components/FormWithUseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormWithUseReducer/>
    </>
  )
}

export default App
