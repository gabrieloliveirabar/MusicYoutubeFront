import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Global from './style/Global'
import { MainRoutes } from './routes/mainRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Global />
      <MainRoutes/>
       
    </div>
  )
}

export default App
