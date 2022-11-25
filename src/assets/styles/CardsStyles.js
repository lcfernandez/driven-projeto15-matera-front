import styled from "styled-components";

export const CardsContainer = styled.div`
`;

export const CardsList = styled.ul``;

export const CardListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 570px;
    height: 70px;
    background-color: lightgray;
    padding: 15px 20px;
    margin-bottom: 20px;
    button {
        border: none;
        background-color: transparent;
    }
    img {
        width: 18px;
        height: 18px;
    }
`;

export const CardFormContainer = styled.div`
    img {
        width: 26px;
    }
`;

export const CardForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const TextLabel = styled.label``;
export const TextInput = styled.input``;