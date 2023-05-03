import Navbar from "../components/navbar/Navbar";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
function AboutPage(props) {

    return (
        <div>
            <Navbar isAuthenticated={localStorage.getItem("username") || localStorage.getItem("email")}/>
                        <MDBContainer className="py-5">
                    <MDBRow>
                        <MDBCol lg="1">   
                        </MDBCol>
                        <MDBCol lg="4">
                            <h1 style={{color: 'orange', marginTop: "10%", fontSize: "10rem"}}>Our</h1>
                            <h1 style={{color: 'orange', margin: "3% auto auto 6%", fontSize: "10rem"}}>Story</h1>    
                        </MDBCol>
                        <MDBCol lg="6" style={{color: 'orange', marginTop: "5%"}}>
                            <p style={{fontSize: "20px"}}>
                            FindMyRoomate is a platform that was created with the 
goal of providing a safe and efficient tool for San Jose State 
University students to find compatible roommates. The 
platform offers a wide range of search preferences, including
roommate habits, personalities, hobbies, location, budget, 
household size, routine, and schedule. This allows students
to find the perfect living arrangement that fits their unique 
needs and preferences. 
                            </p>
                            <p style={{fontSize: "20px"}}>
                            We understand the importance of finding a suitable roommate, 
as it can greatly impact a student’s college experience.
                            </p>
                            <p style={{fontSize: "20px"}}>
                            Our platform is designed to simplify the search process and 
help students connect with like-minded individuals who share
similar interests and lifestyles. 
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
        </div>


    );
}

export default AboutPage;