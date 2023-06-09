import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBCardText,
    MDBInput
} from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';

import LivingPreferences from '../livingPreferences/LivingPrefereneces';
import Info from '../info/Info';
import './Profile.css';
import OtherInfo from '../otherInfo/OtherInfo';
import SocialMedia from '../socialMedia/SocialMedia';
import Chat from '../chat/Chat';
import { useLocation } from "react-router-dom";
import useComponentVisible from '../../hooks/useComponentVisible';
import useFormInput from '../../hooks/useFormInput';

const receiver = {
    username: 'receiverUser'
}

const Profile = (props) => {
    const username = localStorage.getItem("username") || localStorage.getItem("email");
    const [isHidden, setIsHidden] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [userData, setUserData] = useState(null)
    const [updatedData, setUpdatedData] = useState({username: username});
        
    const majorProps = useComponentVisible(false);
        
    const [majorVal, setMajorVal] = useState("Undeclared");
    
    const handleOnMajorClick = () => {
        majorProps.onChange(!majorProps.isComponentVisible);
    }
    

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
            setMajorVal(response.userEducation && response.userEducation.major ? response.userEducation.major : "Undeclared");
            setUserData(response);
            setUpdatedData({
                username: response.userName,
                smoke: response.userHabit && response.userHabit.smoke ? response.userHabit.smoke : "1",
                drink: response.userHabit && response.userHabit.drink ? response.userHabit.drink : "1",
                vape: response.userHabit && response.userHabit.vape ? response.userHabit.vape : "1",
                bedTime: response.userPreference && response.userPreference.bedTime ? response.userPreference.bedTime : "1",
                cleanliness: response.userPreference && response.userPreference.cleanliness ? response.userPreference.cleanliness : "1",
                householdSize: response.userPreference && response.userPreference.householdSize ? response.userPreference.householdSize : "1",
                genderPreference: response.userPreference && response.userPreference.roommateGenderPreference ? response.userPreference.roommateGenderPreference : "Mixed",
                monthlyBudgetFrom: response.userPreference && response.userPreference.monthlyBudgetFrom ? response.userPreference.monthlyBudgetFrom : "0",
                monthlyBudgetTo: response.userPreference && response.userPreference.monthlyBudgetTo ? response.userPreference.monthlyBudgetTo : "0",
                linkedin: response.userSocialMedia && response.userSocialMedia.linkedIn ? response.userSocialMedia.linkedIn : "n/a",
                instagram: response.userSocialMedia && response.userSocialMedia.instagram ? response.userSocialMedia.instagram : "n/a",
                facebook: response.userSocialMedia && response.userSocialMedia.facebook ? response.userSocialMedia.facebook : "n/a",
                github: response.userSocialMedia && response.userSocialMedia.github ? response.userSocialMedia.github : "n/a",
                twitter: response.userSocialMedia && response.userSocialMedia.twitter ? response.userSocialMedia.twitter : "n/a",
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
            "major": majorVal,
            "yearInSchool": "Sophomore",
            "graduationYear": "2025",
            "linkedin": updatedData.linkedin ? updatedData.linkedin : 'n/a',
            "instagram": updatedData.instagram ? updatedData.instagram : 'n/a',
            "facebook": updatedData.facebook ? updatedData.facebook : 'n/a',
            "github": updatedData.github ? updatedData.github : 'n/a',
            "twitter": updatedData.twitter ? updatedData.twitter : 'n/a',
            "bedTime": updatedData.bedTime ? updatedData.bedTime : '1',
            "loudness": updatedData.loudness ? updatedData.loudness : '1',
            "cleanliness": updatedData.cleanliness ? updatedData.cleanliness : '1',
            "householdSize": updatedData.householdSize ? updatedData.householdSize : '1',
            "genderPreference": updatedData.genderPreference ? updatedData.genderPreference : 'ALLGENDERS',
            "monthlyBudgetFrom": updatedData.monthlyBudgetFrom ? Number(updatedData.monthlyBudgetFrom) : "0",
            "monthlyBudgetTo": updatedData.monthlyBudgetTo ? Number(updatedData.monthlyBudgetTo) : "0",
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

    const handleMajorChange = (e) => {
        setMajorVal(e.target.value)
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
                                            src="https://cdn-icons-png.flaticon.com/512/1160/1160326.png?w=1060&t=st=1683006614~exp=1683007214~hmac=8f61b073c2fce813c06749cbf2a4c01864672a5fdb7d35a0aa4631481e8c19ce"
                                            alt="avatar"
                                            className="rounded-circle"
                                            style={{ width: '150px', margin: '0 auto' }}
                                        />
                                    </div>
    
                                    <p className="text-muted mb-1" style={{marginTop: '15px'}}><b>{userData.firstName} {userData.lastName}</b></p>
                                    <p className="text-muted mb-4" ref={majorProps.ref}>
                                        
                                        {/* {(userData.userEducation && userData.userEducation.major) ? userData.userEducation.major : "Undeclared"} */}
                                        {
                                            majorProps.isComponentVisible && <MDBInput label='Major' id='text' type='text' value={majorVal} onChange={handleMajorChange} />

                                        }
                                        {
                                            !majorProps.isComponentVisible && <MDBCardText onClick={handleOnMajorClick}>{majorVal}</MDBCardText>
                                        }
                                        
                                        </p>
    
                                    <div className="d-flex justify-content-center mb-2">
                                        <MDBBtn outline className="ms-1" color='warning' style={{ color: 'orange', backgroundColor: 'white' }}>Hide Profile</MDBBtn>

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