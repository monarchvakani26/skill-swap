import React from 'react'

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SkillSwap</h1>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Profile</a></li>
          <li><a href="#" className="hover:underline">Login</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
