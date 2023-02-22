import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SideBar from './components/SideBar'
import Messages from './components/Messages'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
