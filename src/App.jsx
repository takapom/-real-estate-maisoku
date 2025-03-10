import { useState } from 'react'
import './app.css'
import Information from './components/Information'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Information />
    </div>
  )
}

export default App
