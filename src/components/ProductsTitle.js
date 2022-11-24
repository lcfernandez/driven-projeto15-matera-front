import { COMPLEMENTARY_BG_COLOR, COMPLEMENTARY_TXT_COLOR } from "../constants/colors";
import styled from "styled-components";

export const ProductsTitle = () => {
    return <Title>Produtos</Title>
};

const Title = styled.h1`
    color: ${COMPLEMENTARY_TXT_COLOR};
    background-color: ${COMPLEMENTARY_BG_COLOR};
`;