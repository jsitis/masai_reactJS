import { useState } from 'react'
import './App.css'
import FocusInput from './components/FocusInput'
import RenderCounter from './components/RenderCounter'
import QueryBasedPagination from './components/QueryBasedPagination'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QueryBasedPagination/>
    </>
  )
}

export default App
