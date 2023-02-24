import SideBar from './SideBar'
import Messages from './Messages'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMyUserDetailsAction } from '../redux/actions'
import { useSelector } from "react-redux"


const Home = () => {
  const navigate = useNavigate()
  const myProfile = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <div className="mainContainer d-flex justify-content-center">
      <SideBar myProfile={myProfile} />
      <Messages myProfile={myProfile} />
      </div>
    </>
  )
}

export default Home
