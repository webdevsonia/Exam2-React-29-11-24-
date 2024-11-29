
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>
      <h1>COUNTER</h1>
      <h2>{count}</h2>
      <button disabled={count == 0} onClick={() => setCount(count - 1)}>-</button>
      <button disabled={count == 0} onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default App
