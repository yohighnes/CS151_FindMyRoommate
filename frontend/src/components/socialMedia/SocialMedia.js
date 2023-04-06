import {
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem

} from 'mdb-react-ui-kit';

const SocialMedia = () => {

    return (
        <MDBCard className="mb-4 mb-lg-0">
            <MDBCardBody className="p-0">
                <MDBListGroup className="rounded-3">

                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                        <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                        <MDBCardText>@mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                        <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                        <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBCardBody>
        </MDBCard>
    )
}


export default SocialMedia;