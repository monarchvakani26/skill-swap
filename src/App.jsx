


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import HeroSection from "./components/HeroSection"
import Login from "./pages/Login"
import Register from "./pages/Register"
import HeroSection from "./components/HeroSection"
import Dashboard from "./pages/Dashboard"
import BrowseSkills from "./pages/BrowseSkills"; 
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import PostSkill from "./pages/PostSkill";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/browse" element={<BrowseSkills />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/post-skill" element={<PostSkill />} />
      </Routes>
    </Router>
  )
}

export default App
