import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductsMenu = () => {
    return (
        <SideMenuContainer>
            <Title>categorias</Title>
            <LinkItem to="/produtos/sofas">Sofás</LinkItem>
            <LinkItem to="/produtos/cadeiras">Cadeiras</LinkItem>
            <LinkItem to="/produtos/mesas">Mesas</LinkItem>
            <LinkItem to="/produtos/camas">Camas</LinkItem>
        </SideMenuContainer>
    );
};

const SideMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    text-transform: uppercase;
`;

const LinkItem = styled(Link)`
    text-transform: uppercase;
`;

