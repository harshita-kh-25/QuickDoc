import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './assets/Layout'
import Dashboard from './assets/Dashboard'
import Trash from './assets/Trash'
import Upload from './assets/Upload'
import Recent from './assets/Recent'
import Shared from './assets/Shared'
import Favorites from './assets/Favorites'
import Home from './assets/HomePage/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
    <Route element ={<Layout/>}>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/upload' element={<Upload/>}/>
    <Route path='/trash' element={<Trash/>}/>
    <Route path="/recent" element={<Recent />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="/shared" element={<Shared />} />
    </Route>
    <Route path='/home' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
