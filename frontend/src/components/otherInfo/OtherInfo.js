import {
    MDBCard,
    MDBCardText,
    MDBCardBody
} from 'mdb-react-ui-kit';
import {useState} from 'react';

const OtherInfo = (props) => {

    console.log(props)
    const [drinking, setDrinking] = useState(props.userInfo.userHabit && props.userInfo.userHabit.drink && props.userInfo.userHabit.drink === true ? "2" : "1")
    const [smoking, setSmoking] = useState(props.userInfo.userHabit && props.userInfo.userHabit.smoke && props.userInfo.userHabit.smoke === true ? "2" : "1")
    const [vaping, setVaping] = useState(props.userInfo.userHabit && props.userInfo.userHabit.vape && props.userInfo.userHabit.vape === true ? "2" : "1")


    const handleOnSmokingChange = (e) => {
        props.onOtherInfo({
            drink: drinking,
            smoke: e.target.value,
            vape: vaping
        })
        setSmoking(e.target.value);
    }

    const handleOnDrinkingChange = (e) => {
        props.onOtherInfo({
            drink: e.target.value,
            smoke: smoking,
            vape: vaping
        })
        setDrinking(e.target.value);
    }

    const handleOnVapingChange = (e) => {
        props.onOtherInfo({
            drink: drinking,
            smoke: smoking,
            vape: e.target.value
        })
        setVaping(e.target.value);
    }

    if(props.onOtherInfo) {
        return (
            <MDBCard className="mb-4 mb-md-0">
                <MDBCardBody>
                    <MDBCardText className="mb-4 box-header">Other Information</MDBCardText>
                    <MDBCardText className="mb-1 box-label">Smoking</MDBCardText>
                    <div className="range">
                        <input type="range" value={smoking} onChange={handleOnSmokingChange}  className="form-range" min="1" max="2" step="1" id="smoking" style={{ color: 'orange' }} />
                        <div>No <span style={{marginLeft: '20em'}}>Yes</span></div>
                    </div>
    
                    <MDBCardText className="mt-4 mb-1 box-label">Drinking</MDBCardText>
                    <div className="range">
                        <input type="range" value={drinking} onChange={handleOnDrinkingChange} className="form-range" min="1" max="2" step="1" id="drinking" style={{ color: 'orange' }} />
                        <div>No <span style={{marginLeft: '20em'}}>Yes</span></div>
                    </div>
    
                    <MDBCardText className="mt-4 mb-1 box-label">Vaping</MDBCardText>
                    <div className="range">
                        <input type="range" value={vaping} onChange={handleOnVapingChange}  className="form-range" min="1" max="2" step="1" id="vaping" style={{ color: 'orange' }} />
                        <div>No <span style={{marginLeft: '20em'}}>Yes</span></div>
                    </div>
                </MDBCardBody>
            </MDBCard>
        )
    } else {
        return (
            <MDBCard className="mb-4 mb-md-0">
                <MDBCardBody>
                    <MDBCardText className="mb-4 box-header">Other Information</MDBCardText>
                    <MDBCardText className="mb-1 box-label">Smoking</MDBCardText>
                    <div className="range">
                        <input type="range" value={smoking} className="form-range" min="1" max="2" step="1" id="smoking" style={{ color: 'orange' }} />
                        <div>No <span style={{marginLeft: '20em'}}>Yes</span></div>
                    </div>
    
                    <MDBCardText className="mt-4 mb-1 box-label">Drinking</MDBCardText>
                    <div className="range">
                        <input type="range" value={drinking} className="form-range" min="1" max="2" step="1" id="drinking" style={{ color: 'orange' }} />
                        <div>No <span style={{marginLeft: '20em'}}>Yes</span></div>
                    </div>
    
                    <MDBCardText className="mt-4 mb-1 box-label">Vaping</MDBCardText>
                    <div className="range">
                        <input type="range" value={vaping} className="form-range" min="1" max="2" step="1" id="vaping" style={{ color: 'orange' }} />
                        <div>No <span style={{marginLeft: '20em'}}>Yes</span></div>
                    </div>
                </MDBCardBody>
            </MDBCard>
        )
    }



}


export default OtherInfo;