import card from "../assets/images/card-outline.png";
import gift from "../assets/images/gift-outline.png";
import home from "../assets/images/home-outline.png";
import logOut from "../assets/images/log-out-outline.png";
import person from "../assets/images/person-outline.png";

import { AccountMenuContainer, AccountLinks, Button } from "../assets/styles/AccountStyle";

export const AccountMenu = () => {
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
        </AccountMenuContainer>
    );
};