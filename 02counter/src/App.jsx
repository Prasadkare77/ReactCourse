import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)


  const addValue = () => {
    if (counter !== 20) {
      counter = counter + 1
      setCounter(counter)
      console.log(`Value Added ${counter}`)
    }
  }
  
  const removeValue = () => {
    if (!counter == 0) {
      counter = counter - 1
      setCounter(counter)
      console.log(`Value Removed ${counter}`)
    }
  }
  
  return (
    <>
      <h1>Counter Value</h1>

      <h3>Counter Value: {counter}</h3>

      <button onClick={addValue} className=''>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
