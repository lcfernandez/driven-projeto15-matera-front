import { COMPLEMENTARY_BG_COLOR, COMPLEMENTARY_TXT_COLOR } from "../constants/colors";

import styled from "styled-components";

export default function Footer() {
    function currentYear() {
        const date = new Date();
        return date.getFullYear();
    }

    return (
        <FooterContainer>
            <div>
                Copyright © 2022-{currentYear()}
            </div>
            
            <div>
                Matera S.A. / CNPJ: 36.114.499/0001-05
            </div>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    background-color: ${COMPLEMENTARY_BG_COLOR};
    color: ${COMPLEMENTARY_TXT_COLOR};
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
`;
