import {
    MDBCardBody,
    MDBCardText,
    MDBCard
} from 'mdb-react-ui-kit';
import './LivingPreferences.css';

const LivingPreferencesForm = () => {

    return (
        <MDBCard className="mb-4 mb-md-0">
            <MDBCardBody>
                <MDBCardText className="mb-4 box-header" style={{ textAlign: 'center' }}>Living Preferences</MDBCardText>
                <MDBCardText className="mb-1 box-label">Monthly Budget</MDBCardText>
                <div style={{ margin: '15px 0' }}>
                    <span><input type="number" id="typeNumber" className="form-control" style={{ width: '43%', display: 'inline-block' }} /></span>
                    <span style={{ margin: '0 15px', display: 'inline-block' }}>to</span>
                    <span><input type="number" id="typeNumber" className="form-control" style={{ width: '43%', display: 'inline-block' }} /></span>
                </div>

                <MDBCardText className="mb-1 box-label">Loudness</MDBCardText>

                <div className="range">
                    <input type="range" className="form-range" min="0" max="5" step="0.5" id="loudness" style={{ color: 'orange' }} />
                </div>
                <MDBCardText className="mt-4 mb-1 box-label">Bedtime</MDBCardText>
                <div className="range">
                    <input type="range" className="form-range" min="0" max="5" step="0.5" id="bedtime" style={{ color: 'orange' }} />
                </div>

                <MDBCardText className="mt-4 mb-1 box-label">Cleanliness</MDBCardText>
                <div className="range">
                    <input type="range" className="form-range" min="0" max="5" step="0.5" id="cleanliness" style={{ color: 'orange' }} />
                </div>

                <MDBCardText className="mt-4 mb-1 box-label">Household Size</MDBCardText>
                <div className="range">
                    <input type="range" className="form-range" min="1" max="4" step="1" id="size" style={{ color: 'orange' }} />
                </div>

                <MDBCardText className="mt-4 mb-1 box-label">Roommate Gender Preference</MDBCardText>
                <div style={{ marginTop: '15px' }}>
                    <div className="form-check form-check-inline" style={{ marginRight: '30px' }}>
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="males" style={{ marginRight: '5px' }} />
                        <label htmlFor="inlineRadio1">Males</label>
                    </div>

                    <div className="form-check form-check-inline" style={{ marginRight: '30px' }}>
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="females" style={{ marginRight: '5px' }} />
                        <label htmlFor="inlineRadio2">Females</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="mixed" style={{ marginRight: '5px' }} />
                        <label htmlFor="inlineRadio3">Mixed</label>
                    </div>
                </div>

            </MDBCardBody>
        </MDBCard>

    )
}


export default LivingPreferencesForm;