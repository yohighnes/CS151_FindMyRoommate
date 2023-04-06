import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import SignupForm from "../components/signupForm/SignupForm";

const SignupPage = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleSignUp = (a) => {
        setIsAuthenticated(a);
    }

    return (
        <div>
            <Navbar isAuthenticated={isAuthenticated}/>
            <SignupForm onSignUp={handleSignUp}/>
        </div>
    );
}

export default SignupPage;