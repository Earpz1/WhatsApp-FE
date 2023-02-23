import React from 'react'
import { Button } from 'react-bootstrap'
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Register = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/')
    }
  }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('whatsapp')
  const [username, setUsername] = useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handleRegister = async () => {
    const userDetails = {
      userName: username,
      avatar: 'jffggf',
      email: email,
      password: password,
      role: 'User',
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const fetchURL = 'http://localhost:3001/users/register'

    try {
      let response = await fetch(fetchURL, options)

      if (response.ok) {
        const data = await response.json()
        console.log(response.status)
        localStorage.setItem('accessToken', data.accessToken)
        navigate('/')
      } else {
        console.log(response.status)
      }
    } catch (error) {}
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-25">
      Email
      <MDBInput
        wrapperClass="mb-4"
        type="email"
        value={email}
        onChange={(event) => handleEmail(event)}
      />
      Username
      <MDBInput
        wrapperClass="mb-4"
        type="text"
        value={username}
        onChange={(event) => handleUsername(event)}
      />
      <Button className="mb-4" onClick={handleRegister}>
        Register Account
      </Button>
      <div className="text-center">
        <p>
          Already have account? <a href="#!">Login</a>
        </p>
      </div>
    </MDBContainer>
  )
}

export default Register
