import UsernameContext from "../contexts/UsernameContext";

import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    const [username] = useContext(UsernameContext);

    function handleActions() {
        if (username) {
            return `Olá, ${username}`;
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
                Matera
            </div>

            <div>
                Produtos

                -
                
                Sobre

                -
                
                Contato
            </div>
            
            <div>
                {handleActions()} -
                
                Carrinho
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
