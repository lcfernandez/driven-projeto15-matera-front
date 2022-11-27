import contact from "../assets/images/contact.png";
import chatbubble from "../assets/images/chatbubble-ellipses-outline.svg";
import help from "../assets/images/help-circle-outline.svg";
import whatsapp from "../assets/images/logo-whatsapp.svg";
import swap from "../assets/images/swap-horizontal-outline.svg";
import { ContactImg, ContactTitle } from "../assets/styles/ContactUsStyles";
import { useState } from "react";

const ContactUsPage = () => {
    const options = {
        message:false,
        faq: false,
        changes: false,
        chat:false,
        whatsapp: false,
        default: true
    };

    const [help, setHelp] = useState(options);

    return (
        <div className="container">
            <ContactImg />
            <ContactTitle />
            <div>
                <div className="side-menu">
                    <ul>
                        <li>
                            <img />
                            <p></p>
                        </li>
                    </ul>
                </div>
                <div className="maininfo"></div>
            </div>

        </div>
    );
};

export default ContactUsPage;