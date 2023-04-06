import {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';
import useComponentVisible from '../../hooks/useComponentVisible';
import useFormInput from '../../hooks/useFormInput';

const Info = (props) => {

    // visibility props
    const phoneProps = useComponentVisible(false);
    const pronounsProps = useComponentVisible(false);
    // profile attributes
    const phoneVal = useFormInput(props.userInfo.phone);
    const pronounsVal = useFormInput(props.userInfo.pronouns);

    const handleOnPhoneClick = () => {
        phoneProps.onChange(!phoneProps.isComponentVisible);
    }


    const handleOnPronounsClick = () => {
        pronounsProps.onChange(!pronounsProps.isComponentVisible);
    }

    return (
        <MDBCard className="mb-4">
            <MDBCardBody>
                <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText className="text-muted">example@example.com</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Pronouns</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9" ref={pronounsProps.ref}>
                        {
                            pronounsProps.isComponentVisible && <MDBInput label='Pronouns' id='text' type='text' value={pronounsVal.value} onChange={pronounsVal.onChange} />

                        }
                        {
                            !pronounsProps.isComponentVisible && <MDBCardText className="text-muted" onClick={handleOnPronounsClick}>{pronounsVal.value}</MDBCardText>
                        }
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9" ref={phoneProps.ref}>
                        {
                            phoneProps.isComponentVisible && <MDBInput label='Phone Number' id='typePhone' type='tel' value={phoneVal.value} onChange={phoneVal.onChange} />

                        }
                        {
                            !phoneProps.isComponentVisible && <MDBCardText className="text-muted" onClick={handleOnPhoneClick}>{phoneVal.value}</MDBCardText>
                        }
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>SJSU ID</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText className="text-muted">012345678</MDBCardText>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Info;