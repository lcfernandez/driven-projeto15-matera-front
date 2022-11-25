import styled from "styled-components";
import { Link } from "react-router-dom";

export const AccountContainer = styled.div`
    display: flex;
`;

export const AccountMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: 24px;
        height: 24px;
    }
`;

export const AccountLinks = styled(Link)`
    display: flex;
`;

export const Button = styled.button`
    display: flex;
`;