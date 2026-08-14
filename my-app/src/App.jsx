import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('piyush');

  const onClick = () => {
    setName('john');
  }
  return (
    <>
      <p onClick={onClick}>my name  is {name}</p>
    </>
  )
}
 
export default App
