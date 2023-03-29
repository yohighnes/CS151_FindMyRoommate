import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import logo from "../../pic/logo.png";


const SignupForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [sjsuid, setSjsuId] = useState("");
  const [email, setEmail] = useState("");


  const handleOnClick = () => {
    setFirstname("");
    setEmail("");
    setUsername("");
    setPassword("");
    setSjsuId("");
    setLastname("");

    props.onSignUp(true);

  }

  const handleFirstName = (e) => {
    e.preventDefault();
    setFirstname(e.target.value);
  }

  const handleLastName = (e) => {
    e.preventDefault();
    setLastname(e.target.value);
  }

  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value);
  }

  const handleUsername = (e) => {
    e.preventDefault()
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value);
  }

  const handleSjsuId = (e) => {
    e.preventDefault()
    setSjsuId(e.target.value);
  }

  // fetch(`${}`)

  return (

    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <div>
        <img style={{ height: "100px", marginLeft: 'auto', marginRight: 'auto', marginBottom: '10%' }} src={logo} />
      </div>
      <MDBInput wrapperClass='mb-4' label='First Name' id='firstname' type='text' onChange={handleFirstName} value={firstname}/>
      <MDBInput wrapperClass='mb-4' label='Last Name' id='lastname' type='text' onChange={handleLastName} value={lastname}/>
      <MDBInput wrapperClass='mb-4' label='SJSU ID' id='sjsuid' type='text' onChange={handleSjsuId} value={sjsuid}/>
      <MDBInput wrapperClass='mb-4' label='Username' id='username' type='text' onChange={handleUsername} value={username}/>
      <MDBInput wrapperClass='mb-4' label='School Email' id='email' type='email' onChange={handleEmail} value={email}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' onChange={handlePassword} value={password}/>

      <MDBBtn className="mb-4" style={{ backgroundColor: 'orange' }} onClick={handleOnClick} type="reset">Sign up</MDBBtn>

      <div className="text-center">
        <p>Already a member? <a href="/login" style={{ color: 'orange' }}>Log in</a></p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm" />
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
  );

}

export default SignupForm;