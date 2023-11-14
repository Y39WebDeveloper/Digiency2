import './App.css'
import { Home } from './Pages'
import React from 'react'
import { useState, createContext } from 'react'
import ScrollTop from './components/ScrollTop/ScrollTop'

export const DarkContext = createContext(null)

const App = () => {
  const [isDark, setIsDark] = useState(false)
  const darkValues = {isDark, setIsDark}
  return (
    <DarkContext.Provider value={darkValues}>
      <>
        <Home />
        <ScrollTop/>
      </>
    </DarkContext.Provider>
  )
}

export default App
