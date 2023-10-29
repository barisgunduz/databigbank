import { useState } from 'react'
import Base from './layouts/Base'
import About from './layouts/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  const addXToCounter = (x: number) => {
    setCount((count) => count + x);
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
