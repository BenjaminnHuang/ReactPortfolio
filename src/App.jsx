import { useState } from 'react'
import Intro from "./components/Intro"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Skills from './components/Skills'
import {Route, Routes } from 'react-router-dom'
import data from './components/data'

function App() {
  const projects = data.map(item=>{
    return 
  })
  return (
    <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/projects" element={<Experience/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App
