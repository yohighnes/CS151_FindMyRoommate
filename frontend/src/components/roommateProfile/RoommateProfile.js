import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn
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
            const foundUser = response.filter((e) => e.id === Number(id));
            setUserData(foundUser[0]);
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
                                            src="https://cdn-icons-png.flaticon.com/512/1160/1160326.png?w=1060&t=st=1683006614~exp=1683007214~hmac=8f61b073c2fce813c06749cbf2a4c01864672a5fdb7d35a0aa4631481e8c19ce"
                                            alt="avatar"
                                            className="rounded-circle"
                                            style={{ width: '150px', margin: '0 auto' }}
                                        />
                                        
                                    </div>
    
                                    <p className="text-muted mb-1" style={{marginTop: '15px'}}><b>{userData.firstName} {userData.lastName}</b></p>
                                    <p className="text-muted mb-4">{userData.userEducation.major}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <MDBBtn outline className="ms-1" color='warning' style={{ color: 'orange', backgroundColor: 'white' }}>Message</MDBBtn>

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