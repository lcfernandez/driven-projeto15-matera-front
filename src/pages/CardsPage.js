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
    }, [setCards]);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const getCards = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/cards`, config);
            setCards(res.data);
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    const showServerError = err => {
        const errors = err.map(e => {
            if (e === '"number" length must be at least 16 characters long') {
                return ("Insira apenas os 16 números do cartão");
            } else if (e === '"expiration" length must be at least 5 characters long') {
                return ("A data de vencimento deve seguir o formanto mm/aa");
            } else {
                return ("O código de segurança é formado por três dígitos");
            }
        });

        return errors;
    };

    const validateCard = (name, code, date) => {
        const numberRegex = /[0-9]/;
        const lettersRegex = /[A-Za-z]/;

        if (numberRegex.test(name)) {
            alert("O nome deve conter apenas letras!");
            return;
        }

        if (lettersRegex.test(code)) {
            alert("O código de segurança contém 3 números!");
            return;
        }

        if (lettersRegex.test(date)) {
            alert("A data de vencimento não pode conter letras")
        }

        return true;
    };

    const addCard = async e => {
        e.preventDefault();

        if (validateCard(form.name, form.code, form.expiration)) {
            const validForm = {
                ...form,
                name: form.name.toUpperCase()
            };

            try {
                await axios.post(`${BASE_URL}/cards`, validForm, config);
                getCards();
            } catch (err) {
                alert(showServerError(err.response.data.errors));
            }
        }
    };

    const deleteCard = async id => {
        const confirmed = window.confirm("Você tem certeza que deseja excluir esse cartão?");

        if (confirmed) {
            try {
                await axios.delete(`${BASE_URL}/cards/${id}`, config);
            } catch (err) {
                alert(err.response.data.message);
            }
        }

        getCards();
    };

    const ListofCards = (card) => {
        const { name, number, expiration, company, _id } = card;
        return (
            <CardListItem>
                {company}
                {number}
                {name}
                <p>validade: {expiration}</p>
                <button onClick={e => deleteCard(_id)}>
                    <img
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
                            <TextLabel htmlFor="expiration">Data de vencimento (mm/aa)</TextLabel>
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
                            <button onClick={e => addCard(e)}>Cadastrar</button>
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