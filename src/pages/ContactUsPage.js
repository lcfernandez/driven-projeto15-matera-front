import contact from "../assets/images/contact.png";
import chat from "../assets/images/chatbubble-ellipses-outline.svg";
import faq from "../assets/images/help-circle-outline.svg";
import message from "../assets/images/mail-outline.svg"
import whatsapp from "../assets/images/logo-whatsapp.svg";
import swap from "../assets/images/swap-horizontal-outline.svg";
import { ContactContainer, ContactImg, ContactTitle, MenuContainer, MenuList, DetailsContainer, MainContainer } from "../assets/styles/ContactUsStyles";
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
        <ContactContainer>
            <ContactImg />
            <ContactTitle />
            <MainContainer>
                <MenuContainer>

                </MenuContainer>
                <DetailsContainer></DetailsContainer>
            </MainContainer>

        </ContactContainer>
    );
};

export default ContactUsPage;