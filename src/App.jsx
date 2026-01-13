

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Header from './components/Header'
import Skill from './Pages/Skill'
import About from './Pages/About'

function App() {
 

  return (
    <>
  
    
  <Routes>
    
    <Route path='/' element={<Home/>} />
     <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/header' element={<Header/>} />
      <Route path='/skills' element={<Skill/>} />
       <Route path='/about' element={<About/>} />
      
   
  </Routes>
    </>
  )
}

export default App
