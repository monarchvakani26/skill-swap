// import React from 'react'
// import Navbar from "@/components/Navbar";
// import Home from './pages/Home'
// import HeroSection from './components/HeroSection';
// import './index.css';
// function App() {
//   return (
//     <div className="App">
//     <Navbar />
    
//     <HeroSection />
//   </div>

//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import HeroSection from "./components/HeroSection"
import Login from "./pages/Login"
import Register from "./pages/Register"
import HeroSection from "./components/HeroSection"
// import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  )
}

export default App
