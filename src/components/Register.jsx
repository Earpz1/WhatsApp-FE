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

const Register = () => {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-25">
      Email
      <MDBInput wrapperClass="mb-4" type="email" />
      Password
      <MDBInput wrapperClass="mb-4" type="password" />
      Username
      <MDBInput wrapperClass="mb-4" type="password" />
      <Button className="mb-4">Register Account</Button>
      <div className="text-center">
        <p>
          Already have account? <a href="#!">Login</a>
        </p>
      </div>
    </MDBContainer>
  )
}

export default Register
