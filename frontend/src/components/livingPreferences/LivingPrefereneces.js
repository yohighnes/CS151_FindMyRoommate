import {
    MDBCardBody,
    MDBCardText,
    MDBCard
} from 'mdb-react-ui-kit';
import './LivingPreferences.css';
import {useState} from 'react';

const LivingPreferencesForm = (props) => {
    const convertLoudness = (loudness) => {
        if(loudness === "MOSTLY_QUIET") {
            return "1";
        } else if(loudness === "OCCASIONALLY_SOCIAL") {
            return "2";
        } else if(loudness === "OFTEN_LOUD") {
            return "3";
        } else {
            return "4";;
        }
    }

    const convertCleanliness = (cleanliness) => {
        if(cleanliness === "ALMOST_JUNGLE") {
            return "1";
        } else if(cleanliness === "LOTS_OF_STUFF") {
            return "2";
        } else if(cleanliness === "MOSTLY_TIDY") {
            return "3";
        } else {
            return "4";
        }
    }

    const convertBedTime = (bedTime) => {
        if(bedTime === "NINE") {
            return "1";
        } else if(bedTime === "TEN") {
            return "2";
        } else if(bedTime === "ELEVEN") {
            return "3";
        } else {
            return "4";
        }
    }


    const convertHouseholdSize = (householdSize) => {
        if(householdSize === "ONE") {
            return "1";
        } else if(householdSize === "TWO") {
            return "2";
        } else if(householdSize === "THREE") {
            return "3";
        } else {
            return "4";
        }
    }

    const convertGenderPreference = (gender) => {
        if(gender === "FEMALES") {
            return "Females";
        } else if(gender === "MALES") {
            return "Males";
        } else {
            return "AllGenders";
        }
    }



    const [loudness, setLoudness] = useState(props.userInfo.userPreference ? convertLoudness(props.userInfo.userPreference.loudness) : "1");
    const [cleanliness, setCleanliness] = useState(props.userInfo.userPreference ? convertCleanliness(props.userInfo.userPreference.cleanliness) : "1");
    const [bedTime, setBedTime] = useState(props.userInfo.userPreference ? convertBedTime(props.userInfo.userPreference.bedTime) : "1");
    const [householdSize, setHouseholdSize] = useState(props.userInfo.userPreference ? convertHouseholdSize(props.userInfo.userPreference.householdSize) : "1");
    const [genderPreference, setGenderPreference] = useState(props.userInfo.userPreference ? convertGenderPreference(props.userInfo.userPreference.roommateGenderPreference) : "ALLGENDERS");
    const [monthlyBudgetFrom, setMonthlyBudgetFrom] = useState(props.userInfo.userPreference ? props.userInfo.userPreference.monthlyBudgetFrom : '0')
    const [monthlyBudgetTo, setMonthlyBudgetTo] = useState(props.userInfo.userPreference ? props.userInfo.userPreference.monthlyBudgetTo : '0')


    const handleOnLoudnessChange = (e) => {
        props.onLivingPreferences({
            "bedTime": bedTime,
            "loudness": e.target.value,
            "cleanliness": cleanliness,
            "householdSize": householdSize,
            "genderPreference": genderPreference,
            "monthlyBudgetFrom": monthlyBudgetFrom,
            "monthlyBudgetTo": monthlyBudgetTo
        })
        setLoudness(e.target.value)
    }

    const handleBedTimeChange = (e) => {
            props.onLivingPreferences({
                "bedTime": e.target.value,
                "loudness": loudness,
                "cleanliness": cleanliness,
                "householdSize": householdSize,
                "genderPreference": genderPreference,
                "monthlyBudgetFrom": monthlyBudgetFrom,
                "monthlyBudgetTo": monthlyBudgetTo
            })
        setBedTime(e.target.value)
    }

    const handleCleanlinessChange = (e) => {
            props.onLivingPreferences({
                "bedTime": bedTime,
                "loudness": loudness,
                "cleanliness": e.target.value,
                "householdSize": householdSize,
                "genderPreference": genderPreference,
                "monthlyBudgetFrom": monthlyBudgetFrom,
                "monthlyBudgetTo": monthlyBudgetTo
            })
        setCleanliness(e.target.value)
    }

    const handleHouseholdSizeChange = (e) => {
            props.onLivingPreferences({
                "bedTime": bedTime,
                "loudness": loudness,
                "cleanliness": cleanliness,
                "householdSize": e.target.value,
                "genderPreference": genderPreference,
                "monthlyBudgetFrom": monthlyBudgetFrom,
                "monthlyBudgetTo": monthlyBudgetTo
            })

        setHouseholdSize(e.target.value)
    }

    const handleGenderPreferenceChange = (e) => {
            props.onLivingPreferences({
                "bedTime": bedTime,
                "loudness": loudness,
                "cleanliness": cleanliness,
                "householdSize": householdSize,
                "genderPreference": e,
                "monthlyBudgetFrom": monthlyBudgetFrom,
                "monthlyBudgetTo": monthlyBudgetTo
            })

        setGenderPreference(e);
    }


    const handleMonthlyBudgetFromChange = (e) => {
        props.onLivingPreferences({
            "bedTime": bedTime,
            "loudness": loudness,
            "cleanliness": cleanliness,
            "householdSize": householdSize,
            "genderPreference": genderPreference,
            "monthlyBudgetFrom": e.target.value,
            "monthlyBudgetTo": monthlyBudgetTo
        })

        setMonthlyBudgetFrom(e.target.value);
    }

    const handleMonthlyBudgetToChange = (e) => {
        props.onLivingPreferences({
            "bedTime": bedTime,
            "loudness": loudness,
            "cleanliness": cleanliness,
            "householdSize": householdSize,
            "genderPreference": genderPreference,
            "monthlyBudgetFrom": monthlyBudgetFrom,
            "monthlyBudgetTo": e.target.value
        })

        setMonthlyBudgetTo(e.target.value);
    }

    if(props.onLivingPreferences) {
        return (
            <MDBCard className="mb-4 mb-md-0">
                <MDBCardBody>
                    <MDBCardText className="mb-4 box-header" style={{ textAlign: 'center' }}>Living Preferences</MDBCardText>
                    <MDBCardText className="mb-1 box-label">Monthly Budget</MDBCardText>
                    <div style={{ margin: '15px 0' }}>
                        <span><input type="number" id="typeNumber" className="form-control" style={{ width: '43%', display: 'inline-block' }} value={monthlyBudgetFrom} onChange={handleMonthlyBudgetFromChange}/></span>
                        <span style={{ margin: '0 15px', display: 'inline-block' }}>to</span>
                        <span><input type="number" id="typeNumber" className="form-control" style={{ width: '43%', display: 'inline-block' }} value={monthlyBudgetTo} onChange={handleMonthlyBudgetToChange}/></span>
                    </div>
    
                    <MDBCardText className="mb-1 box-label">Loudness (Mostly Quiet - Very Party)</MDBCardText>
    
                    <div className="range">
                        <input type="range" value={loudness} onChange={handleOnLoudnessChange} className="form-range" min="1" max="4" step="1" id="loudness" style={{ color: 'orange' }} />
                        <div>Mostly Quiet <span style={{marginLeft: '13em'}}>Very Party</span></div>
                    </div>
                    <MDBCardText className="mt-4 mb-1 box-label">Bedtime</MDBCardText>
                    <div className="range">
                        <input type="range" value={bedTime} onChange={handleBedTimeChange} className="form-range" min="1" max="4" step="1" id="bedtime" style={{ color: 'orange' }} />
                        <div>9PM <span style={{marginLeft: '18em'}}>12AM+</span></div>
    
                    </div>
    
                    <MDBCardText className="mt-4 mb-1 box-label">Cleanliness</MDBCardText>
                    <div className="range">
                        <input type="range" value={cleanliness} onChange={handleCleanlinessChange} className="form-range" min="1" max="4" step="1" id="cleanliness" style={{ color: 'orange' }} />
                        <div>Mostly Jungle <span style={{marginLeft: '12em'}}>Very Clean</span></div>
                    </div>
    
                    <MDBCardText className="mt-4 mb-1 box-label">Household Size</MDBCardText>
                    <div className="range">
                        <input type="range" value={householdSize} onChange={handleHouseholdSizeChange} className="form-range" min="1" max="4" step="1" id="size" style={{ color: 'orange' }} />
                        <div>1 <span style={{marginLeft: '21em'}}>4+</span></div>
                    </div>
    
                    <MDBCardText className="mt-4 mb-1 box-label">Roommate Gender Preference</MDBCardText>
                    <div style={{ marginTop: '15px' }}>
                        <div className="form-check form-check-inline" style={{ marginRight: '30px' }}>
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="males" style={{ marginRight: '5px' }} checked={genderPreference === "Males"} onChange={() => handleGenderPreferenceChange("Males")}/>
                            <label htmlFor="inlineRadio1">Males</label>
                        </div>
    
                        <div className="form-check form-check-inline" style={{ marginRight: '30px' }}>
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="females" style={{ marginRight: '5px' }} checked={genderPreference === "Females"} onChange={() => handleGenderPreferenceChange("Females")}/>
                            <label htmlFor="inlineRadio2">Females</label>
                        </div>
    
                        <div className="form-check form-check-inline">
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="mixed" style={{ marginRight: '5px' }} checked={genderPreference === "AllGenders"} onChange={() => handleGenderPreferenceChange("AllGenders")} />
                            <label htmlFor="inlineRadio3">Mixed</label>
                        </div>
                    </div>
    
                </MDBCardBody>
            </MDBCard>
    
        )
    } else {
        return (
            <MDBCard className="mb-4 mb-md-0">
                <MDBCardBody>
                    <MDBCardText className="mb-4 box-header" style={{ textAlign: 'center' }}>Living Preferences</MDBCardText>
                    <MDBCardText className="mb-1 box-label">Monthly Budget</MDBCardText>
                    <div style={{ margin: '15px 0' }}>
                        <span><input type="number" id="typeNumber" className="form-control" style={{ width: '43%', display: 'inline-block' }}  value={monthlyBudgetFrom} /></span>
                        <span style={{ margin: '0 15px', display: 'inline-block' }}>to</span>
                        <span><input type="number" id="typeNumber" className="form-control" style={{ width: '43%', display: 'inline-block' }} value={monthlyBudgetTo}/></span>
                    </div>
    
                    <MDBCardText className="mb-1 box-label">Loudness (Mostly Quiet - Very Party)</MDBCardText>
    
                    <div className="range">
                        <input type="range" value={loudness} className="form-range" min="1" max="4" step="1" id="loudness" style={{ color: 'orange' }} />
                        <div>Mostly Quiet <span style={{marginLeft: '13em'}}>Very Party</span></div>
                    </div>
                    <MDBCardText className="mt-4 mb-1 box-label">Bedtime</MDBCardText>
                    <div className="range">
                        <input type="range" value={bedTime} className="form-range" min="1" max="4" step="1" id="bedtime" style={{ color: 'orange' }} />
                        <div>9PM <span style={{marginLeft: '18em'}}>12AM+</span></div>
    
                    </div>
    
                    <MDBCardText className="mt-4 mb-1 box-label">Cleanliness</MDBCardText>
                    <div className="range">
                        <input type="range" value={cleanliness} className="form-range" min="1" max="4" step="1" id="cleanliness" style={{ color: 'orange' }} />
                        <div>Mostly Jungle <span style={{marginLeft: '12em'}}>Very Clean</span></div>
                    </div>
    
                    <MDBCardText className="mt-4 mb-1 box-label">Household Size</MDBCardText>
                    <div className="range">
                        <input type="range" value={householdSize} className="form-range" min="1" max="4" step="1" id="size" style={{ color: 'orange' }} />
                        <div>1 <span style={{marginLeft: '21em'}}>4+</span></div>
                    </div>
    
                    <MDBCardText className="mt-4 mb-1 box-label">Roommate Gender Preference</MDBCardText>
                    <div style={{ marginTop: '15px' }}>
                        <div className="form-check form-check-inline" style={{ marginRight: '30px' }}>
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="males" style={{ marginRight: '5px' }} checked={genderPreference === "Males"}/>
                            <label htmlFor="inlineRadio1">Males</label>
                        </div>
    
                        <div className="form-check form-check-inline" style={{ marginRight: '30px' }}>
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="females" style={{ marginRight: '5px' }} checked={genderPreference === "Females"}/>
                            <label htmlFor="inlineRadio2">Females</label>
                        </div>
    
                        <div className="form-check form-check-inline">
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="mixed" style={{ marginRight: '5px' }} checked={genderPreference === "AllGenders"} />
                            <label htmlFor="inlineRadio3">Mixed</label>
                        </div>
                    </div>
    
                </MDBCardBody>
            </MDBCard>
    
        )
    }


}


export default LivingPreferencesForm;