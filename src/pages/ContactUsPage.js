import contact from "../assets/images/contact.png";
import chat from "../assets/images/chatbubble-ellipses-outline.svg";
import faq from "../assets/images/help-circle-outline.svg";
import message from "../assets/images/mail-outline.svg"
import whatsapp from "../assets/images/logo-whatsapp.svg";
import swap from "../assets/images/swap-horizontal-outline.svg";
import close from "../assets/images/close-outline.png"
import { ContactContainer, ContactImg, ContactTitle, MenuContainer, MenuList, DetailsContainer, MainContainer, HelpContainer, CloseButton } from "../assets/styles/ContactUsStyles";
import UsernameContext from "../contexts/UsernameContext";
import { useContext, useState } from "react";

const ContactUsPage = () => {
    const [username] = useContext(UsernameContext);
    const [help, setHelp] = useState(null);

    const closeHelp = e => {
        e.preventDefault();
        setHelp(null);
    };

    const ShowHelpType = ({ type }) => {
        if (type === "faq") {
            return (
                <HelpContainer>
                    <div>
                        <h2>FAQ - Perguntas Frequentes</h2>
                        <p>Formas de pagamento, devoluções, materiais, medidas... Temos tudo aqui!</p>
                        <button>Ver FAQ</button>
                    </div>
                    <CloseButton onClick={e => closeHelp(e)}>
                        <img src={close} alt="ícone de fechar" />
                    </CloseButton>
                </HelpContainer>
            );
        } else if (type === "changes") {
            return (
                <HelpContainer>
                    <div>
                        <h2>Devoluções</h2>
                        <p>Solicite a sua devolução online.</p>
                        <p>É muito mais fácil!</p>
                        <button>Solicitar devolução</button>
                    </div>
                    <CloseButton onClick={e => closeHelp(e)}>
                        <img src={close} alt="ícone de fechar" />
                    </CloseButton>
                </HelpContainer>
            );
        } else if (type === "message") {
            return (
                <HelpContainer>
                    <div>
                        <h2>Mande uma Mensagem</h2>
                        <p>Tire suas dúvidas sobre qualquer assunto.</p>
                        <p>Retorno em até 1 dia últil.</p>
                        <button>Enviar mensagem</button>
                    </div>
                    <CloseButton onClick={e => closeHelp(e)}>
                        <img src={close} alt="ícone de fechar" />
                    </CloseButton>
                </HelpContainer>
            );
        } else if (type === "chat") {
            return (
                <HelpContainer>
                    <div>
                        <h2>Chat</h2>
                        <p>Fale com o nosso time!</p>
                        <p>Segunda a Sexta: 08:00 - 22:00</p>
                        <p>Sábado: 12:00 - 20:00</p>
                        <button>Iniciar chat</button>
                    </div>
                    <CloseButton onClick={e => closeHelp(e)}>
                        <img src={close} alt="ícone de fechar" />
                    </CloseButton>
                </HelpContainer>
            );
        } else if (type === "whatsapp") {
            return (
                <HelpContainer>
                    <div>
                        <h2>whatsApp: (99) 9999-9999</h2>
                        <p>Segunda a Sexta: 08:00 - 22:00</p>
                        <p>Sábado: 12:00 - 20:00</p>
                        <button>Iniciar conversa</button>
                    </div>
                    <CloseButton onClick={e => closeHelp(e)}>
                        <img src={close} alt="ícone de fechar" />
                    </CloseButton>
                </HelpContainer>
            );
        }
    };

    return (
        <ContactContainer>
            <ContactImg src={contact} alt="foto de uma mulher com um notebook no colo" />
            <ContactTitle>Olá {username}!</ContactTitle>
            <p>Estamos aqui para ajudar!</p>
            <MainContainer>
                <MenuContainer>
                    <MenuList>
                        <li onClick={e => setHelp("faq")}>
                            <img src={faq} alt="ícone de ajuda" />
                            <p>FAQ - Perguntas Frequentes</p>
                        </li>
                        <li onClick={e => setHelp("changes")}>
                            <img src={swap} alt="ícone de troca" />
                            <p>Devoluções</p>
                        </li>
                        <li onClick={e => setHelp("message")}>
                            <img src={message} alt="ícone de e-mail" />
                            <p>Mande uma Mensagem</p>
                        </li>
                        <li onClick={e => setHelp("chat")}>
                            <img src={chat} alt="ícone de chat" />
                            <p>Chat</p>
                        </li>
                        <li onClick={e => setHelp("whatsapp")}>
                            <img src={whatsapp} alt="ícone do whatsapp" />
                            <p>WhatsApp</p>
                        </li>
                    </MenuList>
                </MenuContainer>
                <DetailsContainer>
                    <ShowHelpType type={help} />
                </DetailsContainer>
            </MainContainer>
        </ContactContainer>
    );
};

export default ContactUsPage;