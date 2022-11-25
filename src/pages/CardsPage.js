import styled from "styled-components";
import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";
import { useContext } from "react";
import TokenContext from "../contexts/TokenContext";
import close from "../assets/images/close-outline.png";

const cards = [
    {
        _id: "87",
        name: "FULANO A C",
        number: "**** **** **** 9075",
        expiration: "05/2023",
        code: "818",
        company: "master"
    },
    {
        _id: "ji",
        name: "FULANO A C",
        number: "**** **** **** 9075",
        expiration: "08/2030",
        code: "458",
        company: "visa"
    }
];

const CardsPage = () => {
    //const [token] = useContext(TokenContext);

    const deleteCard = () => {};

    const ListofCards = (card) => {
        const { name, number, expiration, company } = card;
        return (
            <ListItem>
                {company}
                {number}
                {name}
                <p>validade: {expiration}</p>
                <button>
                    <img
                        onClick={deleteCard}
                        alt="ícone de deletar"
                        src={close}
                    />
                </button>
            </ListItem>
        );
    };

    return (
        <AccountContainer>
            <AccountMenu />
            <CardsContainer>
                <CardsList>
                    {cards.map(c => <ListofCards
                        key={c._id}
                        {...c}
                    />)}
                </CardsList>
                <p></p>
                <form></form>
            </CardsContainer>
        </AccountContainer>
    );
};

const CardsContainer = styled.div`
`;

const CardsList = styled.ul``;

const ListItem = styled.li`
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

export default CardsPage;