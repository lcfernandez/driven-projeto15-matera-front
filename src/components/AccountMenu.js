import card from "../assets/images/card-outline.png";
import gift from "../assets/images/gift-outline.png";
import home from "../assets/images/home-outline.png";
import logOut from "../assets/images/log-out-outline.png";
import person from "../assets/images/person-outline.png";

import { AccountMenuContainer, AccountLinks, Button } from "../assets/styles/AccountStyle";

import TokenContext from "../contexts/TokenContext";
import UsernameContext from "../contexts/UsernameContext";

import { BASE_URL } from "../constants/url";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AccountMenu = () => {
    const [token, setToken] = useContext(TokenContext);
    const [username, setUsername] = useContext(UsernameContext);

    const navigate = useNavigate();

    function signOut() {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios
            .post(`${BASE_URL}/sign-out`, {}, config)
            .then(() => {
                setToken(undefined);
                setUsername(undefined);
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                navigate("/");
            })
            .catch(err => alert(err.response.data.message));
    }

    return (
        <AccountMenuContainer>
            <ul>
                <li>
                    <AccountLinks to="/conta/pedidos">
                        <img
                            alt="ícone de pedidos"
                            src={gift}
                        />
                        <p>Meus Pedidos</p>
                    </AccountLinks>
                </li>
                <li>
                    <AccountLinks to="/conta/cartoes">
                        <img
                            alt="ícone de cartão"
                            src={card}
                        />
                        <p>Meus Cartões de crédito</p>
                    </AccountLinks>
                </li>
                <li>
                    <AccountLinks to="/conta/enderecos">
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
            <Button onClick={() => {signOut()}}>
                <img
                    alt="ícone de sair"
                    src={logOut}
                />
                <p>Sair</p>
            </Button>
        </AccountMenuContainer>
    );
};