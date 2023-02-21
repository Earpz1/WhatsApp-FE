import { Container } from 'react-bootstrap'
import { GrGroup } from 'react-icons/gr'
import { GiCircle } from 'react-icons/gi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { AiOutlineMore } from 'react-icons/ai'
import Contact from './Contact'

const SideBar = () => {
  return (
    <>
      <Container className="w-50 container">
        <div className="heading d-flex justify-content-between align-items-center">
          <img src="https://i.pravatar.cc/50?img=1" />
          <div className="icons">
            <HiOutlineUserGroup className="icon" />
            <GiCircle className="icon" />
            <BsFillChatLeftTextFill className="icon" />
            <AiOutlineMore className="icon" />
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
