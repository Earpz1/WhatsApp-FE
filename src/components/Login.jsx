import React from 'react'
import { Button } from 'react-bootstrap'
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { useEffect } from 'react'

const Login = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/')
    }
  }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = async () => {
    const details = {
      email: email,
      password: password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const fetchURL = 'http://localhost:3001/users/login'

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
      Password
      <MDBInput
        wrapperClass="mb-4"
        type="password"
        onChange={(event) => handlePassword(event)}
      />
      <Button className="mb-4" onClick={handleLogin}>
        Sign in
      </Button>
      <div className="text-center">
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </MDBContainer>
  )
}

export default Login
