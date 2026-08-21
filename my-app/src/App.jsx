import { useState } from 'react'
import './App.css'

function App() {
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
