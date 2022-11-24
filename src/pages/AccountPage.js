import { useContext } from "react";
import UsernameContext from "../contexts/UsernameContext";
import styled from "styled-components";

const AccountPage = () => {
    const [username] = useContext(UsernameContext);

    return (
        <div>
            <div className="menu-lateral">
                <ul>
                    <li>
                        <a>
                            <img />
                            <p>Meus Pedidos</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img />
                            <p>Meus Cartões de crédito</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img />
                            <p>Meus Endereços</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img />
                            <p>Meus Dados</p>
                        </a>
                    </li>
                </ul>
                <button>Sair</button>
            </div>
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
        </div>
    );
};

const AccountContainer = styled.div``;

export default AccountPage;