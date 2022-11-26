import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../contexts/TokenContext";
import close from "../assets/images/close-outline.png";
import open from "../assets/images/add-circle-outline.png";
import { CardsContainer, CardsList, CardListItem, CardFormContainer, CardForm, TextLabel, TextInput } from "../assets/styles/CardsStyles";
import { BASE_URL } from "../constants/url";
import axios from "axios";

const AdressesPage = () => {
    return (
        <AccountContainer>
            <AccountMenu />
           <p>oi</p>
        </AccountContainer>
    );
};

export default AdressesPage;