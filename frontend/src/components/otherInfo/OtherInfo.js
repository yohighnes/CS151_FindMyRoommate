import {
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBProgress,
    MDBProgressBar,

} from 'mdb-react-ui-kit';

const OtherInfo = () => {

    return (
        <MDBCard className="mb-4 mb-md-0">
            <MDBCardBody>
                <MDBCardText className="mb-4 box-header">Other Information</MDBCardText>
                <MDBCardText className="mb-1 box-label">Smoking</MDBCardText>
                <div className="range">
                    <input type="range" className="form-range" min="1" max="2" step="1" id="smoking" style={{ color: 'orange' }} />
                </div>

                <MDBCardText className="mt-4 mb-1 box-label">Drinking</MDBCardText>
                <div className="range">
                    <input type="range" className="form-range" min="1" max="2" step="1" id="drinking" style={{ color: 'orange' }} />
                </div>

                <MDBCardText className="mt-4 mb-1 box-label">Vaping</MDBCardText>
                <div className="range">
                    <input type="range" className="form-range" min="1" max="2" step="1" id="vaping" style={{ color: 'orange' }} />
                </div>

                <MDBCardText className="mt-4 mb-1 box-label">Lifestyle</MDBCardText>

            </MDBCardBody>
        </MDBCard>
    )

}


export default OtherInfo;