import styled from "styled-components";

export const AddressesContainer = styled.div`
`;
export const AddressesList = styled.ul``;

export const AddressListItem = styled.li`
    display: flex;
    justify-content: space-between;
    width: 570px;
    height: 90px;
    background-color: lightgray;
    padding: 15px 20px;
    margin-bottom: 20px;
    button {
        border: none;
        background-color: transparent;
        margin-right: 5px;
    }
`;

export const DeleteImg = styled.img`
    width: 18px;
    height: 18px;
`;

export const EditImg = styled.img`
    width: 20px;
    height: 20px;
`;

export const AddressFormContainer = styled.div`
    img {
        width: 26px;
    }
`;

export const AddressForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const TextLabel = styled.label``;
export const TextInput = styled.input``;