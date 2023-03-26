import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import logo from "../../pic/logo.png";

function LoginForm() {

    return (
        
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

        <div>
          <img style={{height: "100px",marginLeft: 'auto', marginRight: 'auto', marginBottom: '10%'}} src={logo}/>
          </div>
        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
  
        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="!#" style={{color: '#F4B183'}}>Forgot password?</a>
        </div>
  
        <MDBBtn className="mb-4" style={{backgroundColor: '#F4B183'}}>Sign in</MDBBtn>
  
        <div className="text-center">
          <p>Not a member? <a href="#!" style={{color: '#F4B183'}}>Register</a></p>
          <p>or sign up with:</p>
  
          <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>
  
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>
  
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>
  
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>
  
          </div>
        </div>
  
      </MDBContainer>
    );

}

export default LoginForm;