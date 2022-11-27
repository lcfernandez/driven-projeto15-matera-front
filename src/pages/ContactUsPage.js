import contact from "../assets/images/contact.png";
import chat from "../assets/images/chatbubble-ellipses-outline.svg";
import faq from "../assets/images/help-circle-outline.svg";
import message from "../assets/images/mail-outline.svg"
import whatsapp from "../assets/images/logo-whatsapp.svg";
import swap from "../assets/images/swap-horizontal-outline.svg";
import { ContactContainer, ContactImg, ContactTitle, MenuContainer, MenuList, DetailsContainer, MainContainer } from "../assets/styles/ContactUsStyles";
import { useState } from "react";

const ContactUsPage = () => {

    const ShowHelpType = type => {
        console.log(type);
    };


    return (
        <ContactContainer>
            <ContactImg src={contact} alt="foto de uma mulher com um notebook no colo"/>
            <ContactTitle />
            <MainContainer>
                <MenuContainer>
                    <MenuList>
                        <li onClick={e => ShowHelpType("faq")}>
                            <img src={faq} alt="ícone de ajuda" />
                            <p>FAQ - Perguntas Frequentes</p>
                        </li>
                        <li onClick={e => ShowHelpType("changes")}>
                            <img src={swap} alt="ícone de troca" />
                            <p>Devoluções</p>
                        </li>
                        <li onClick={e => ShowHelpType("message")}>
                            <img src={message} alt="ícone de e-mail" />
                            <p>Mande uma Mensagem</p>
                        </li>
                        <li onClick={e => ShowHelpType("chat")}>
                            <img src={chat} alt="ícone de chat" />
                            <p>Chat</p>
                        </li>
                        <li onClick={e => ShowHelpType("whatsapp")}>
                            <img src={whatsapp} alt="ícone do whatsapp" />
                            <p>Whatsapp</p>
                        </li>
                    </MenuList>
                </MenuContainer>
                <DetailsContainer>

                </DetailsContainer>
            </MainContainer>

        </ContactContainer>
    );
};

export default ContactUsPage;