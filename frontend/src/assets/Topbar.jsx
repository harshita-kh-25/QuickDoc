import React from 'react'

function Topbar() {
  return (
    <header className="bg-white px-4 py-3 shadow flex justify-between items-center">
      <h2 className="text-lg font-semibold">Welcome, Harshita 👋</h2>
      <button className="text-gray-600 hover:text-red-500">Logout</button>
    </header>
  )
}

export default Topbar