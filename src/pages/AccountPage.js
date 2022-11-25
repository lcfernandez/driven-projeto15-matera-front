import { useContext } from "react";
import UsernameContext from "../contexts/UsernameContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

import card from "../assets/images/card-outline.png";
import gift from "../assets/images/gift-outline.png";
import home from "../assets/images/home-outline.png";
import logOut from "../assets/images/log-out-outline.png";
import person from "../assets/images/person-outline.png";

const AccountPage = () => {
    const [username] = useContext(UsernameContext);

    return (
        <AccountContainer>
            <AccountMenu className="menu-lateral">
                <ul>
                    <li>
                        <AccountLinks>
                            <img
                                alt="ícone de pedidos"
                                src={gift}
                            />
                            <p>Meus Pedidos</p>
                        </AccountLinks>
                    </li>
                    <li>
                        <AccountLinks>
                            <img
                                alt="ícone de cartão"
                                src={card}
                            />
                            <p>Meus Cartões de crédito</p>
                        </AccountLinks>
                    </li>
                    <li>
                        <AccountLinks>
                            <img
                                alt="ícone de endereço"
                                src={home}
                            />
                            <p>Meus Endereços</p>
                        </AccountLinks>
                    </li>
                    <li>
                        <AccountLinks>
                            <img
                                alt="ícone de pessoa"
                                src={person}
                            />
                            <p>Meus Dados</p>
                        </AccountLinks>
                    </li>
                </ul>
                <Button>
                    <img
                        alt="ícone de sair"
                        src={logOut}
                    />
                    <p>Sair</p>
                </Button>
            </AccountMenu>
            <div className="main-conteudo">
                <h2>Olá {username}</h2>
                <p>Aqui é onde você poderá visualizar e editar todos os dados da sua conta.</p>
                <div>
                    <img />
                    <p>Minha conta: onde você pode consultar as informações da sua conta.</p>
                </div>
                <div>
                    <img />
                    <p>Sacola: veja os produtos que você já adicionou à sua sacola.</p>
                </div>
            </div>
        </AccountContainer>
    );
};

const AccountContainer = styled.div`
    display: flex;
`;

const AccountMenu = styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: 24px;
        height: 24px;
    }
`;

const AccountLinks = styled(Link)`
    display: flex;
`;
const Button = styled.button`
    display: flex;
`;
//24px

export default AccountPage;