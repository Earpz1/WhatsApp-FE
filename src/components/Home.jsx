import SideBar from './SideBar'
import Messages from './Messages'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMyUserDetailsAction } from '../redux/actions'

const Home = () => {
  const navigate = useNavigate()


  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/login')
    }
  }, [])

 
  console.log(accessToken);


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
