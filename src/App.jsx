import './App.css'
import { Home } from './Pages'
import React from 'react'
import { useState, createContext } from 'react'

export const DarkContext = createContext(null)

const App = () => {
  const [isDark, setIsDark] = useState(false)
  const darkValues = {isDark, setIsDark}
  return (
    <DarkContext.Provider value={darkValues}>
      <>
        <Home />
      </>
    </DarkContext.Provider>
  )
}

export default App
