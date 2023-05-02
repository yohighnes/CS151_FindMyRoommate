import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';

import LivingPreferences from '../livingPreferences/LivingPrefereneces';
import Info from '../info/Info';
import OtherInfo from '../otherInfo/OtherInfo';
import SocialMedia from '../socialMedia/SocialMedia';
import {useParams } from "react-router-dom";
import Navbar from '../navbar/Navbar';


const RoommateProfile = (props) => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null)


    console.log(id);
 
    useEffect(() => {
        let path = `http://localhost:8080/users/all`;

        const fetchData = async () => {
          await fetch(path, { 
            method: 'GET', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then(response => {
            return response.json()
          }).then(response => {
            console.log(response)
            setUserData(response[id]);
          });
        };
    
        fetchData();
      },[]);

      if(userData) {
        return (
            <div>
            <Navbar isAuthenticated={true}></Navbar>
            <section style={{ backgroundColor: '#FFF0DD' }}>
                <MDBContainer className="py-5">
                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">
                                    <div>
                                        <MDBCardImage
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                            alt="avatar"
                                            className="rounded-circle"
                                            style={{ width: '150px', margin: '0 auto' }}
                                        />
                                    </div>
    
                                    <p className="text-muted mb-1">Full Stack Developer</p>
                                    <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        </div>
                                </MDBCardBody>
                            </MDBCard>
    
                            <SocialMedia userInfo={userData}/>
    
                        </MDBCol>
                        <MDBCol lg="8">
                            <Info userInfo={userData} />
    
                            <MDBRow>
                                <MDBCol md="6">
                                    <LivingPreferences userInfo={userData}/>
                                </MDBCol>
    
                                <MDBCol md="6">
                                    <OtherInfo userInfo={userData}/>    
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            </div>
            
        );
      }


    
}


export default RoommateProfile;