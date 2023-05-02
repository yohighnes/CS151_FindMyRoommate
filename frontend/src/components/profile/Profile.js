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
import './Profile.css';
import OtherInfo from '../otherInfo/OtherInfo';
import SocialMedia from '../socialMedia/SocialMedia';
import Chat from '../chat/Chat';
import { useLocation } from "react-router-dom";


const receiver = {
    username: 'receiverUser'
}

const Profile = (props) => {
    const location = useLocation();

    const username = localStorage.getItem("username") || localStorage.getItem("email");
    const [isHidden, setIsHidden] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [userData, setUserData] = useState(null)
    const [updatedData, setUpdatedData] = useState({username: username});

      useEffect(() => {
        let path = `http://localhost:8080/users/user?emailOrUsername=${username}`;
        if(props.email) {
            path = `http://localhost:8080/users/user?emailOrUsername=${localStorage.getItem("email")}`
        } 
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
            setUserData(response);
            setUpdatedData({
                username: response.userName,
                smoke: response.userHabit.smoke,
                drink: response.userHabit.drink,
                vape: response.userHabit.vape,
                bedTime: response.userPreference.bedTime,
                cleanliness: response.userPreference.cleanliness,
                householdSize: response.userPreference.householdSize,
                genderPreference: response.userPreference.roommateGenderPreference,
                linkedin: response.userSocialMedia.linkedIn,
                instagram: response.userSocialMedia.instagram
            })
          });
        };
    
        fetchData();
      },[]);


    const handleOnSave = () => {
        console.log(updatedData)
        const jsonData = JSON.stringify({
            "username" : userData.userName,
            "smoke": updatedData.smoke ? updatedData.smoke : '1' ,
            "drink": updatedData.drink ? updatedData.drink : '1',
            "vape": updatedData.vape ? updatedData.vape : '1',
            "major": "Computer Science",
            "yearInSchool": "Sophomore",
            "graduationYear": "2025",
            "linkedin": updatedData.linkedin ? updatedData.linkedin : 'n/a',
            "instagram": updatedData.instagram ? updatedData.instagram : 'n/a',
            "bedTime": updatedData.bedTime ? updatedData.bedTime : '1',
            "loudness": updatedData.loudness ? updatedData.loudness : '1',
            "cleanliness": updatedData.cleanliness ? updatedData.cleanliness : '1',
            "householdSize": updatedData.householdSize ? updatedData.householdSize : '1',
            "genderPreference": updatedData.genderPreference ? updatedData.genderPreference : 'ALLGENDERS'
        })

        fetch('http://localhost:8080/users/addUserProfileInfo', { 
            method: 'POST', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: jsonData
      
          }).then(response => {
            console.log(response);

          })
    }

    const handleSocialMedia = (socialMedia) => {
        const newData = {...updatedData, ...socialMedia};
        console.log(newData);
        setUpdatedData(newData);
    }

    const handleOtherInfo = (otherInfo) => {
        const newData = {...updatedData, ...otherInfo};
        setUpdatedData(newData);
    }

    const handleLivingPreferences = (LivingPreferences) => {
        const newData = {...updatedData, ...LivingPreferences};
        setUpdatedData(newData);
    }

    const handleIsHidden = () => {
        setIsHidden(!isHidden);
    }

    const handleOnMessage = () => {
        setShowChat(true);
    }

    if (showChat) {
        return <Chat username={userData.username} receiverName={receiver.username} />
    }

    if(userData) {
        return (
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
                                        <MDBBtn color='warning' style={{ color: 'white', backgroundColor: 'orange' }} onChange={handleIsHidden}>{isHidden ? 'Show' : 'Hide'} Profile</MDBBtn>
    
                                        <MDBBtn outline className="ms-1" color='warning' style={{ color: 'orange', backgroundColor: 'white' }} onClick={handleOnMessage}>Message</MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
    
                            <SocialMedia userInfo={userData} onSocialMedia={handleSocialMedia}/>
    
                        </MDBCol>
                        <MDBCol lg="8">
                            <Info userInfo={userData} />
    
                            <MDBRow>
                                <MDBCol md="6">
                                    <LivingPreferences userInfo={userData} onLivingPreferences={handleLivingPreferences}/>
                                </MDBCol>
    
                                <MDBCol md="6">
                                    <OtherInfo userInfo={userData} onOtherInfo={handleOtherInfo}/>
                                    <MDBBtn color='warning'  style={{ color: 'white', backgroundColor: 'orange', marginTop: "2rem", width: '26rem' }} onClick={handleOnSave} >Save</MDBBtn>
    
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        );
    }

    
}


export default Profile;