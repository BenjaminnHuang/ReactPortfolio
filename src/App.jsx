import { useState } from 'react'
import Intro from "./components/Intro"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/" element={<Intro/>}/>
    </Routes>
  )
}

export default App
