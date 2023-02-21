import { Container } from 'react-bootstrap'
import { BsCheck2All } from 'react-icons/bs'

const Contact = ({ name, lastMessage, lastMessageTime }) => {
  return (
    <>
      <Container>
        <div className="contact d-flex align-items-center justify-content-between">
          <div className="d-flex justify-content-between">
            <img src="https://i.pravatar.cc/50" />
            <div className="d-flex flex-column">
              <h5>{name}</h5>

              <div className="d-flex align-items-center">
                <BsCheck2All className="messageRead" />{' '}
                <small>{lastMessage}</small>
              </div>
            </div>
          </div>
          <small>{lastMessageTime}</small>
        </div>
      </Container>
    </>
  )
}

export default Contact
