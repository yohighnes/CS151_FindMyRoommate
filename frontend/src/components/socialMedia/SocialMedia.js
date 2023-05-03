import {
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBInput

} from 'mdb-react-ui-kit';
import useComponentVisible from '../../hooks/useComponentVisible';
import useFormInput from '../../hooks/useFormInput';

const SocialMedia = (props) => {

        // visibility props
        const instagramProps = useComponentVisible(false);
        const linkedInProps = useComponentVisible(false);
        const githubProps = useComponentVisible(false);
        const twitterProps = useComponentVisible(false);
        const facebookProps = useComponentVisible(false);

        // profile attributes
        const instagramVal = useFormInput(props.userInfo.userSocialMedia && props.userInfo.userSocialMedia.instagram ? props.userInfo.userSocialMedia.instagram : "n/a");
        const linkedInVal = useFormInput(props.userInfo.userSocialMedia && props.userInfo.userSocialMedia.linkedIn ? props.userInfo.userSocialMedia.linkedIn : "n/a");
        const githubVal = useFormInput(props.userInfo.userSocialMedia && props.userInfo.userSocialMedia.github ? props.userInfo.userSocialMedia.github : "n/a");
        const twitterVal = useFormInput(props.userInfo.userSocialMedia && props.userInfo.userSocialMedia.twitter ? props.userInfo.userSocialMedia.twitter : "n/a");
        const facebookVal = useFormInput(props.userInfo.userSocialMedia && props.userInfo.userSocialMedia.facebook ? props.userInfo.userSocialMedia.facebook : "n/a");

    
        const handleOnInstagramClick = () => {
            instagramProps.onChange(!instagramProps.isComponentVisible);
        }
    
    
        const handleOnLinkedInClick = () => {
            linkedInProps.onChange(!linkedInProps.isComponentVisible);
        }

        const handleOnGithubClick = () => {
            githubProps.onChange(!githubProps.isComponentVisible);
        }
    
    
        const handleOnTwitterClick = () => {
            twitterProps.onChange(!twitterProps.isComponentVisible);
        }

        const handleOnFacebookClick = () => {
            facebookProps.onChange(!facebookProps.isComponentVisible);
        }

        const handleOnInstagramChange = (e) => {
            instagramVal.onChange(e);
            props.onSocialMedia({
                "linkedin": linkedInVal.value,
                "instagram": e.target.value,
                "github": githubVal.value,
                "facebook": facebookVal.value,
                "twitter": twitterVal.value
            })
        }

        const handleOnLinkedInChange = (e) => {
            linkedInVal.onChange(e);
            props.onSocialMedia({
                "linkedin": e.target.value,
                "instagram": instagramVal.value,
                "github": githubVal.value,
                "facebook": facebookVal.value,
                "twitter": twitterVal.value
            })
        }

        const handleOnFacebookChange = (e) => {
            facebookVal.onChange(e);
            props.onSocialMedia({
                "linkedin": linkedInVal.value,
                "instagram": instagramVal.value,
                "github": githubVal.value,
                "facebook": e.target.value,
                "twitter": twitterVal.value
            })
        }

        const handleOnGithubChange = (e) => {
            githubVal.onChange(e);
            props.onSocialMedia({
                "linkedin": linkedInVal.value,
                "instagram": instagramVal.value,
                "github": e.target.value,
                "facebook": facebookVal.value,
                "twitter": twitterVal.value
            })
        }

        const handleOnTwitterChange = (e) => {
            twitterVal.onChange(e);
            props.onSocialMedia({
                "linkedin": linkedInVal.value,
                "instagram": instagramVal.value,
                "github": githubVal.value,
                "facebook": facebookVal.value,
                "twitter": e.target.value
            })
        }

    if(props.onSocialMedia) {
        return (
            <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                    <MDBListGroup className="rounded-3">
    
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" ref={githubProps.ref}>
                            <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                            {
                                githubProps.isComponentVisible && <MDBInput label='GitHub' id='text' type='text' value={githubVal.value} onChange={handleOnGithubChange} />
    
                            }
                            {
                                !githubProps.isComponentVisible && <MDBCardText onClick={handleOnGithubClick}>{githubVal.value}</MDBCardText>
                            }
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" ref={twitterProps.ref}>
                            <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                            {
                                twitterProps.isComponentVisible && <MDBInput label='Twitter' id='text' type='text' value={twitterVal.value} onChange={handleOnTwitterChange} />
    
                            }
                            {
                                !twitterProps.isComponentVisible && <MDBCardText onClick={handleOnTwitterClick}>{twitterVal.value}</MDBCardText>
                            }
                            </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3"  ref={instagramProps.ref}>
                            <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                            {
                                instagramProps.isComponentVisible && <MDBInput label='Instagram' id='text' type='text' value={instagramVal.value} onChange={handleOnInstagramChange} />
    
                            }
                            {
                                !instagramProps.isComponentVisible && <MDBCardText onClick={handleOnInstagramClick}>{instagramVal.value}</MDBCardText>
                            }
                            
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" ref={facebookProps.ref}>
                            <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                            {
                                facebookProps.isComponentVisible && <MDBInput label='FaceBook' id='text' type='text' value={facebookVal.value} onChange={handleOnFacebookChange} />
    
                            }
                            {
                                !facebookProps.isComponentVisible && <MDBCardText onClick={handleOnFacebookClick}>{facebookVal.value}</MDBCardText>
                            }
                            
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" ref={linkedInProps.ref}>
                            <MDBIcon fab icon="linkedin fa-lg" style={{ color: '#3b5998' }} />
                            {
                                linkedInProps.isComponentVisible && <MDBInput label='LinkedIn' id='text' type='text' value={linkedInVal.value} onChange={handleOnLinkedInChange} />
    
                            }
                            {
                                !linkedInProps.isComponentVisible && <MDBCardText onClick={handleOnLinkedInClick}>{linkedInVal.value}</MDBCardText>
                            }
                            
                        </MDBListGroupItem>
                    </MDBListGroup>
                </MDBCardBody>
            </MDBCard>
        )
    } else {
        return (
            <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                    <MDBListGroup className="rounded-3">
    
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" ref={githubProps.ref}>
                            <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                            {
                                githubProps.isComponentVisible && <MDBInput label='GitHub' id='text' type='text' value={githubVal.value}/>
    
                            }
                            {
                                !githubProps.isComponentVisible && <MDBCardText>{githubVal.value}</MDBCardText>
                            }
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" ref={twitterProps.ref}>
                            <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                            {
                                twitterProps.isComponentVisible && <MDBInput label='Twitter' id='text' type='text' value={twitterVal.value} onChange={handleOnTwitterChange} />
    
                            }
                            {
                                !twitterProps.isComponentVisible && <MDBCardText>{twitterVal.value}</MDBCardText>
                            }
                            </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3"  ref={instagramProps.ref}>
                            <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                            {
                                instagramProps.isComponentVisible && <MDBInput label='Instagram' id='text' type='text' value={instagramVal.value}/>
    
                            }
                            {
                                !instagramProps.isComponentVisible && <MDBCardText>{instagramVal.value}</MDBCardText>
                            }
                            
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" ref={facebookProps.ref}>
                            <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                            {
                                facebookProps.isComponentVisible && <MDBInput label='FaceBook' id='text' type='text' value={facebookVal.value}/>
    
                            }
                            {
                                !facebookProps.isComponentVisible && <MDBCardText>{facebookVal.value}</MDBCardText>
                            }
                            
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" ref={linkedInProps.ref}>
                            <MDBIcon fab icon="linkedin fa-lg" style={{ color: '#3b5998' }} />
                            {
                                linkedInProps.isComponentVisible && <MDBInput label='LinkedIn' id='text' type='text' value={linkedInVal.value}/>
    
                            }
                            {
                                !linkedInProps.isComponentVisible && <MDBCardText>{linkedInVal.value}</MDBCardText>
                            }
                            
                        </MDBListGroupItem>
                    </MDBListGroup>
                </MDBCardBody>
            </MDBCard>
        )
    }

}


export default SocialMedia;