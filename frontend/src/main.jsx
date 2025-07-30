import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './assets/Layout'
import Dashboard from './assets/Dashboard'
import Trash from './assets/Trash'
import Upload from './assets/Upload'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
    <Route element ={<Layout/>}>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/upload' element={<Upload/>}/>
    <Route path='/trash' element={<Trash/>}/>
    {/* <Route path="/trash" element={<TrashDocs />} /> */}

    </Route>
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
