import { Container } from 'react-bootstrap'
import { AiOutlineMore, AiOutlineSearch } from 'react-icons/ai'
import ChatBubble from 'react-chat-bubble'
import { useState } from 'react'

const Messages = () => {
  const [messages, setMessage] = useState([
    {
      type: 0,
      image: 'https://via.placeholder.com/150 ',
      text: 'Hello! Good Morning!',
    },
    {
      type: 1,
      image: 'https://via.placeholder.com/150 ',
      text: 'Hello! Good Afternoon!',
    },
  ])
  return (
    <>
      <Container>
        <div className="message-heading d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src="https://via.placeholder.com/50" />
            <h4>Tim</h4>
          </div>
          <div className="icons">
            <AiOutlineSearch className="icon" />
            <AiOutlineMore className="icon" />
          </div>
        </div>
        <div className="d-flex flex-column messageContainer">
          <div className="messageSent">
            Testing message Testing messageTesting messageTesting messageTesting
            messageTesting messageTesting message
          </div>
          <div className="messageRecieved ">
            Testing message Testing messageTesting messageTesting messageTesting
            messageTesting messageTesting message
          </div>
          <div className="messageSent">
            Testing message Testing messageTesting messageTesting messageTesting
            messageTesting messageTesting message
          </div>
          <div className="messageRecieved ">
            Testing message Testing messageTesting messageTesting messageTesting
            messageTesting messageTesting message
          </div>
          <div className="messageSent">
            Testing message Testing messageTesting messageTesting messageTesting
            messageTesting messageTesting message
          </div>
          <div className="messageRecieved ">
            Testing message Testing messageTesting messageTesting messageTesting
            messageTesting messageTesting message
          </div>
          <div className="messageSent">
            Testing message Testing messageTesting messageTesting messageTesting
            messageTesting messageTesting message
          </div>
          <div className="messageRecieved ">
            Testing message Testing messageTesting messageTesting messageTesting
            messageTesting messageTesting message
          </div>
        </div>
      </Container>
    </>
  )
}
export default Messages
