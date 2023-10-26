import { useState } from 'react'
import './App.css'
import FetchComponent from './components/fetch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<FetchComponent />
    </>
  )
}

export default App
