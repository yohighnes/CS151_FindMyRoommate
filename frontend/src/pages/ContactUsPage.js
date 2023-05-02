import ContactUsForm from "../components/contactUsForm/ContactUsForm";
import Navbar from "../components/navbar/Navbar";

function ContactUsPage(props) {
    return (
        <div>
            <Navbar isAuthenticated={localStorage.getItem("username") || localStorage.getItem("email")}/>
            <ContactUsForm />
        </div>
    );
}

export default ContactUsPage;