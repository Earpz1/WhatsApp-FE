import { Container, Modal, Form, Button, ListGroup } from 'react-bootstrap'
import { useState } from 'react'
import { GiCircle } from 'react-icons/gi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BsCloudSnowFill, BsFillChatLeftTextFill } from 'react-icons/bs'
import Contact from './Contact'
import { BiLogOut } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchUserChats,
  fetchUserDetails,
  updateUserDetails,
} from '../redux/actions'

const SideBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state)

  const logout = () => {
    localStorage.removeItem('accessToken')
    navigate('/login')
  }

  const [showModal, setShowModal] = useState(false)
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [filterUsername, setFilterUsername] = useState('')

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  const handleQuery = async (event) => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    }
    const fetchURL = `http://localhost:3001/users/?userName=${event.target.value}`

    try {
      let response = await fetch(fetchURL, options)
      if (response.ok) {
        const data = await response.json()
        setFilterUsername(data)
        console.log(data)
      }
    } catch (error) {}
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedDetails = {}
    if (userName) {
      updatedDetails.userName = userName
    }
    if (avatar) {
      updatedDetails.avatar = avatar
    }
    if (email) {
      updatedDetails.email = email
    }
    if (password) {
      updatedDetails.password = password
    }
    dispatch(
      updateUserDetails(
        myProfile._id,
        {
          userName,
          avatar,
          email,
          password,
        },
        localStorage.getItem('accessToken'),
      ),
    )
    setShowModal(false)
  }

  useEffect(() => {
    dispatch(fetchUserDetails())
  }, [dispatch])
  useEffect(() => {
    dispatch(fetchUserChats())
  }, [dispatch])
  const myProfile = useSelector((state) => state.userInfo)
  const myChats = useSelector((state) => state.chats)

  return (
    <>
      <Container className="w-50 container">
        <div className="heading d-flex justify-content-between align-items-center">
          <img style={{ maxWidth: '5rem' }} src={myProfile?.avatar} />
          <p>{myProfile?.userName}</p>
          <Button onClick={handleShow}>Edit Profile</Button>
          <div className="icons">
            <HiOutlineUserGroup className="icon" />
            <GiCircle className="icon" />
            <BsFillChatLeftTextFill className="icon" />
            <BiLogOut className="icon" onClick={logout} />
          </div>
        </div>
        <input
          type="text"
          name="enter message"
          className="w-100 input-message"
          placeholder="Search for a user..."
          onChange={(event) => handleQuery(event)}
        />
        <ListGroup className="w-75">
          {filterUsername &&
            filterUsername.map((name) => (
              <ListGroup.Item>{name.userName}</ListGroup.Item>
            ))}
        </ListGroup>
        {myChats &&
          myChats.length > 0 &&
          myChats.map((chat) => (
            <Contact
              key={chat._id}
              name={chat.members.join(', ')}
              lastMessageTime={chat.updatedAt}
            />
          ))}
      </Container>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder={myProfile.userName}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formAvatar">
              <Form.Label>Avatar URL</Form.Label>
              <Form.Control
                type="text"
                placeholder={myProfile.avatar}
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder={myProfile.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder={myProfile.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SideBar
