import contact from "../assets/images/contact.png";
import chatbubble from "../assets/images/chatbubble-ellipses-outline.svg";
import help from "../assets/images/help-circle-outline.svg";
import whatsapp from "../assets/images/logo-whatsapp.svg";
import swap from "../assets/images/swap-horizontal-outline.svg";
import { ContactImg, ContactTitle } from "../assets/styles/ContactUsStyles";

const ContactUsPage = () => {
    return (
        <div className="container">
            <ContactImg />
            <ContactTitle />
            <ul>
            <li>
                <img/>
                <div>
                    <h2></h2>
                    <p></p>
                </div>
            </li>
            </ul>
        </div>
    );
};

export default ContactUsPage;