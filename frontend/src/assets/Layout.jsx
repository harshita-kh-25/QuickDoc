import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='flex h-screen bg-gray-100'>
        <Sidebar/>
        <div className='flex flex-col flex-1'>
            <Topbar/>
            <main className="p-4 overflow-y-auto">
            <Outlet />
        </main>
        </div>
    </div>
  )
}
