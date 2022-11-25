import { useContext } from "react";
import UsernameContext from "../contexts/UsernameContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";

const AccountPage = () => {
    const [username] = useContext(UsernameContext);

    return (
        <AccountContainer>
            <AccountMenu />
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

export default AccountPage;