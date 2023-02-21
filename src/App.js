import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SideBar from './components/SideBar'
import Messages from './components/Messages'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <div className="mainContainer d-flex justify-content-center">
        <SideBar />
        <Messages />
      </div>
    </>
  )
}

export default App
