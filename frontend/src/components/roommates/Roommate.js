import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import "./Roommate.css";
import { useNavigate } from 'react-router-dom';

const Roommate = (props) => {
    const navigate = useNavigate();

    const handleViewProfile = () => {
        console.log(props.index);
        navigate(`/users/${props.index}`);
    }

    const convertGenderPreference = (gender) => {
        if(gender === "FEMALES") {
            return "Females";
        } else if(gender === "MALES") {
            return "Males";
        } else {
            return "Mixed";
        }
    }

    const convertCleanliness = (cleanliness) => {
        if(cleanliness === "ALMOST_JUNGLE") {
            return "Almost Jungle";
        } else if(cleanliness === "LOTS_OF_STUFF") {
            return "Lots of stuff";
        } else if(cleanliness === "MOSTLY_TIDY") {
            return "Mostly tidy";
        } else {
            return "Very clean";
        }
    }

    const convertLoudness = (loudness) => {
        if(loudness === "MOSTLY_QUIET") {
            return "Mostly quiet";
        } else if(loudness === "OCCASIONALLY_SOCIAL") {
            return "Occasionally social";
        } else if(loudness === "OFTEN_LOUD") {
            return "Often loud";
        } else {
            return "Very party";
        }
    }

    return (
        <MDBContainer>
            <MDBRow className="justify-content-center">
                <MDBCol md="9" lg="7" xl="7" className="mt-5">
                    <MDBCard style={{ borderRadius: '15px'}}>
                        <MDBCardBody className="p-4">
                            <div className="d-flex text-black">
                                <div className="flex-shrink-0">
                                    <MDBCardImage
                                        style={{ width: '180px', borderRadius: '10px' }}
                                        src='https://cdn-icons-png.flaticon.com/512/1160/1160326.png?w=1060&t=st=1683006614~exp=1683007214~hmac=8f61b073c2fce813c06749cbf2a4c01864672a5fdb7d35a0aa4631481e8c19ce'
                                        alt='Generic placeholder image'
                                        fluid />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <MDBCardTitle>{props.user.firstName} {props.user.lastName}</MDBCardTitle>
                                    <MDBCardText>{props.user.userEducation.major}</MDBCardText>

                                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                        style={{ backgroundColor: '#efefef' }}>
                                        <div className="px-3">
                                            <p className="small text-muted mb-1">Loudness</p>
                                            <p className="mb-0">{convertLoudness(props.user.userPreference.loudness)}</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="small text-muted mb-1">Cleanliness</p>
                                            <p className="mb-0">{convertCleanliness(props.user.userPreference.cleanliness)}</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="small text-muted mb-1">Preference</p>
                                            <p className="mb-0">{convertGenderPreference(props.user.userPreference.roommateGenderPreference)}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-1">
                                        <MDBBtn className="flex-grow-1" style={{ backgroundColor: 'orange', borderColor: 'orange' }} onClick={handleViewProfile}>View Profile</MDBBtn>
                                    </div>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );

}
export default Roommate;