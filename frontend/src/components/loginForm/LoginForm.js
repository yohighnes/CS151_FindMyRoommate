import React, {useState} from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import logo from "../../pic/logo.png";
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleOnPasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const onSignIn = () => {
    var jsonData = {
      email: email,
      password: password
    }

    fetch('http://localhost:8080/users/login', { 
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)

    }).then(response => {
      console.log(response)
      if(response.status === 200) {
        localStorage.setItem("email", email);
        navigate('/profile', {state: {email: email }});
      }
    })
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <div>
        <img style={{ height: "100px", marginLeft: 'auto', marginRight: 'auto', marginBottom: '10%' }} src={logo} />
      </div>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={handleOnEmailChange} />
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={handleOnPasswordChange}/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#" style={{ color: 'orange' }}>Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" style={{ backgroundColor: 'orange' }} onClick={onSignIn}>Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="/signup" style={{ color: 'orange' }}>Register</a></p>
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

export default LoginForm;