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
                Entre ou cadastre-se
                
                -
                
                Carrinho
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
