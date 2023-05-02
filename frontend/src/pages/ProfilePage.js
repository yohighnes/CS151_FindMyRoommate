import Profile from "../components/profile/Profile";
import Navbar from "../components/navbar/Navbar";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
    const location = useLocation();

    
    return (
        <div>
            <Navbar isAuthenticated={true} />
            <Profile />
        </div>

    )
}


export default ProfilePage;