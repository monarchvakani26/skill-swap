


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import HeroSection from "./components/HeroSection"
import Login from "./pages/Login"
import Register from "./pages/Register"
import HeroSection from "./components/HeroSection"
import Dashboard from "./pages/Dashboard"
import BrowseSkills from "./pages/BrowseSkills"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/browse" element={<BrowseSkills />} />
      </Routes>
    </Router>
  )
}

export default App
