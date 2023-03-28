import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem

} from 'mdb-react-ui-kit';
import { useState } from 'react';

import LivingPreferences from '../livingPreferences/LivingPrefereneces';
import Info from '../info/Info';
import './Profile.css';
import OtherInfo from '../otherInfo/OtherInfo';
import SocialMedia from '../socialMedia/SocialMedia';

const data = {
    pronouns: 'he/him/his',
    phone: '(000) 000-0000',
    name: 'Johnatan Smith',
    email: 'sba@sjsu.edu.com'
}

const Profile = () => {


    const [isHidden, setIsHidden] = useState(false);



    const handleIsHidden = () => {
        setIsHidden(!isHidden);
    }


    return (
        <section style={{ backgroundColor: '#FFF0DD' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <div style={{ paddingLeft: '30%' }}>
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: '150px' }}
                                    />
                                </div>

                                <p className="text-muted mb-1">Full Stack Developer</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <MDBBtn color='warning' style={{ color: 'white', backgroundColor: 'orange' }} onChange={handleIsHidden}>{isHidden ? 'Show' : 'Hide'} Profile</MDBBtn>

                                    <MDBBtn outline className="ms-1" color='warning' style={{ color: 'orange', backgroundColor: 'white' }}>Message</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

            <SocialMedia/>
                    </MDBCol>
                    <MDBCol lg="8">
                        <Info userInfo={data} />

                        <MDBRow>
                            <MDBCol md="6">
                                <LivingPreferences />
                            </MDBCol>

                            <MDBCol md="6">
                                <OtherInfo />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}


export default Profile;