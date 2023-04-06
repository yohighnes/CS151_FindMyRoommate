import Navbar from "../components/navbar/Navbar";
import Roommates from "../components/roommates/Roommates";

const RoommatesPage = () => {
    return (
        <div>
            <Navbar isAuthenticated={true} />
            <Roommates />
        </div>
    )
}

export default RoommatesPage;