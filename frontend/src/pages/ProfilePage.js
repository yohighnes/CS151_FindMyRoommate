import Profile from "../components/profile/Profile";
import Navbar from "../components/navbar/Navbar";


const ProfilePage = () => {
    return (
        <div>
            <Navbar isAuthenticated={true} />
            <Profile />
        </div>

    )
}


export default ProfilePage;