import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../contexts/TokenContext";
import close from "../assets/images/close-outline.png";
import open from "../assets/images/add-circle-outline.png";
import { CardsContainer, CardsList, CardListItem, CardFormContainer, CardForm, TextLabel, TextInput } from "../assets/styles/CardsStyles";
import { BASE_URL } from "../constants/url";
import axios from "axios";

const CardsPage = () => {
    const [token] = useContext(TokenContext);
    const [showForm, setShowForm] = useState(false);
    const [cards, setCards] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: "", number: "", expiration: "", code: "" });


    useEffect(() => {
        getCards();
    });

    const getCards = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        try {
            const res = await axios.get(`${BASE_URL}/cards`, config);
            setCards(res.data);
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    const deleteCard = () => { };

    const ListofCards = (card) => {
        const { name, number, expiration, company } = card;
        return (
            <CardListItem>
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
            </CardListItem>
        );
    };

    const setFormStatus = () => {
        if (showForm === false) {
            setShowForm(true);
        } else {
            setShowForm(false);
        }
    }

    const handleForm = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <AccountContainer>
            <AccountMenu />
            <CardsContainer>
                <CardsList>
                    <p>Meus cartões de crédtio</p>
                    {!cards
                        ?
                        <p>loading</p>
                        :
                        cards.map(c => <ListofCards
                            key={c._id}
                            {...c}
                        />)
                    }
                </CardsList>
                <CardFormContainer>
                    <p>Adicione um novo cartão</p>
                    <button onClick={setFormStatus}>
                        <img
                            alt="ícone de adicionar"
                            src={open}
                        />
                    </button>
                    {showForm
                        ?
                        <CardForm>
                            <TextLabel htmlFor="number">Número do cartão</TextLabel>
                            <TextInput
                                type="text"
                                id="number"
                                name="number"
                                value={form.number}
                                onChange={handleForm}
                                placeholder="Digite o número"
                                disabled={loading}
                                required
                            />
                            <TextLabel htmlFor="name">Nome do titular</TextLabel>
                            <TextInput
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleForm}
                                placeholder="Digite o nome"
                                disabled={loading}
                                required
                            />
                            <TextLabel htmlFor="expiration">Data de vencimento</TextLabel>
                            <TextInput
                                type="text"
                                id="expiration"
                                name="expiration"
                                value={form.expiration}
                                onChange={handleForm}
                                placeholder="Digite a data de vencimento"
                                disabled={loading}
                                required
                            />
                            <TextLabel htmlFor="code">Código de segurança</TextLabel>
                            <TextInput
                                type="text"
                                id="code"
                                name="code"
                                value={form.code}
                                onChange={handleForm}
                                placeholder="Digite o código de segurança"
                                disabled={loading}
                                required
                            />
                        </CardForm>
                        :
                        ""
                    }
                </CardFormContainer>
            </CardsContainer>
        </AccountContainer>
    );
};

export default CardsPage;