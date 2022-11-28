import UsernameContext from "../contexts/UsernameContext";

import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    const [username] = useContext(UsernameContext);

    function handleActions() {
        if (username) {
            return <Link to="/conta">Olá, {username}</Link>;
        } else {
            return (
                <>
                    <Link to="/login">Entre</Link> ou <Link to="/cadastro">cadastre-se</Link>
                </>
            );
        }
    }

    return (
        <HeaderContainer>
            <div>
                <Link to="/">Matera</Link>
            </div>

            <div>
                <Link to="/produtos">Produtos</Link>

                -

                <Link to="/sobre-nos">Sobre</Link>

                -

                <Link to="/contato">Contato</Link>
            </div>

            <div>
                {handleActions()} - <Link to="/carrinho">Carrinho</Link>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
