import { COMPLEMENTARY_BG_COLOR, COMPLEMENTARY_TXT_COLOR } from "../constants/colors";

import styled from "styled-components";

export default function HomePage() {
    return (
        <HomePageContainer>
            <Slogan>
                Slogan bonitinho
            </Slogan>

            <div>
                Novidades
            </div>

            <NewProducts>
                Mesa mais recente

                -

                Sofá mais recente

                -

                Cama mais recente

                -

                Outro sofá recente
            </NewProducts>
        </HomePageContainer>
    );
}

const HomePageContainer = styled.div`
`;

const NewProducts = styled.div`
    text-align: center;
`;

const Slogan = styled.div`
    background-color: ${COMPLEMENTARY_BG_COLOR};
    color: ${COMPLEMENTARY_TXT_COLOR};
    text-align: center;
`;
