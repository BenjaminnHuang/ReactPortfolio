import { useState } from 'react'
import Intro from "./components/Intro"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import {Route, Routes } from 'react-router-dom'
import Skills from './components/Skills'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App
