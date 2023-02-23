import SideBar from './SideBar'
import Messages from './Messages'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="mainContainer d-flex justify-content-center">
        <SideBar />
        <Messages />
      </div>
    </>
  )
}

export default Home
