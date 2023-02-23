import { Container } from 'react-bootstrap'
import { GiCircle } from 'react-icons/gi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { AiOutlineMore } from 'react-icons/ai'
import Contact from './Contact'
import { BiLogOut } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const naviagte = useNavigate()
  const logout = () => {
    localStorage.removeItem('accessToken')
    naviagte('/login')
  }

  return (
    <>
      <Container className="w-50 container">
        <div className="heading d-flex justify-content-between align-items-center">
          <img src="https://i.pravatar.cc/50?img=1" />
          <div className="icons">
            <HiOutlineUserGroup className="icon" />
            <GiCircle className="icon" />
            <BsFillChatLeftTextFill className="icon" />
            <BiLogOut className="icon" onClick={logout} />
          </div>
        </div>
        <Contact
          name="Tim"
          lastMessage="How are you?"
          lastMessageTime="14:50"
        />
        <Contact
          name="Steve"
          lastMessage="What time shall we meet?"
          lastMessageTime="17:50"
        />
        <Contact
          name="Daniel"
          lastMessage="Are you there?"
          lastMessageTime="Yesterday"
        />
        <Contact
          name="Alexandra"
          lastMessage="How have you been?"
          lastMessageTime="Sunday"
        />
        <Contact
          name="Steve"
          lastMessage="What time shall we meet?"
          lastMessageTime="17:50"
        />
        <Contact
          name="Aron"
          lastMessage="What time shall we meet?"
          lastMessageTime="17:50"
        />
        <Contact
          name="May"
          lastMessage="What time shall we meet?"
          lastMessageTime="17:50"
        />
        <Contact
          name="Tetiana"
          lastMessage="What time shall we meet?"
          lastMessageTime="17:50"
        />
        <Contact
          name="Ricardo"
          lastMessage="What time shall we meet?"
          lastMessageTime="17:50"
        />
        <Contact
          name="Andy"
          lastMessage="What time shall we meet?"
          lastMessageTime="17:50"
        />
        <Contact
          name="Akbar"
          lastMessage="What time shall we meet?"
          lastMessageTime="17:50"
        />
        <Contact
          name="Jordan"
          lastMessage="What time shall we meet?"
          lastMessageTime="17:50"
        />
      </Container>
    </>
  )
}

export default SideBar
