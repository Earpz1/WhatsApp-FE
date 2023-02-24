import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SideBar from './components/SideBar'
import Messages from './components/Messages'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import SocketTest from "./components/SocketTest"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="socket" element={<SocketTest />} />
      </Routes>
    </Router>
  )
}

export default App
