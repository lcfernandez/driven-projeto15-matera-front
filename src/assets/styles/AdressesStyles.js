import styled from "styled-components";

export const AdressesContainer = styled.div`
`;
export const AdressesList = styled.ul``;

export const AdressListItem = styled.li`
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

export const AdressFormContainer = styled.div`
    img {
        width: 26px;
    }
`;

export const AdressForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const TextLabel = styled.label``;
export const TextInput = styled.input``;