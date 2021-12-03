// Packages
import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <span>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </span>
)}

export default Counter
