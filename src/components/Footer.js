import { COMPLEMENTARY_BG_COLOR, COMPLEMENTARY_TXT_COLOR } from "../constants/colors";

import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            <div>
                Copyright
            </div>
            
            <div>
                Matera, CNPJ
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
