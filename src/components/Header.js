import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Header() {
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
                <Link to="/login">Entre</Link> ou <Link to="/cadastro">cadastre-se</Link> -
                
                Carrinho
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
