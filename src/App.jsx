import { useState } from 'react'
import './App.css'
import File1 from './components/File1'

function App() {
  const [count, setCount] = useState(0)

  return (
  
  <div className='outercontainer'>
      <File1/>
  </div>
  )
}

export default App
