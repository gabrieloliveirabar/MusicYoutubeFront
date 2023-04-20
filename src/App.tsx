import { useState } from 'react'

import './App.css'
import Global from './style/Global'
import { MainRoutes } from './routes/mainRoutes'
import {  SongProvider } from './context/songContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SongProvider>
        <Global />
        <MainRoutes/>
      </SongProvider>
      
       
    </div>
  )
}

export default App
