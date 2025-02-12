import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Rickroll from "./pages/Rickroll";

 
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rickroll" element={<Rickroll />} />
      </Routes>
  </Router>
  )
}

export default App
