import Navbar from "../components/navbar/Navbar";
import Main from "../components/main/Main";
import { useState } from "react";

function LandingPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    return (
        <div>
            <Navbar />
            <Main />
        </div>
    );
}

export default LandingPage;