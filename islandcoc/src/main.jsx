import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import About from './pages/About.jsx'
import Edification from './pages/Edification.jsx'
import Evangelism from './pages/Evangelism.jsx'
import Leader from './pages/Leaders.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/about' element={<About />} />
    <Route path='/edification' element={<Edification />} />
    <Route path='/evangelism' element={<Evangelism />} />
    <Route path='/leaders' element={<Leader />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
  </BrowserRouter>
)
