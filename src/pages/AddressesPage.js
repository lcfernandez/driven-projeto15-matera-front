import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";
import close from "../assets/images/close-outline.png";
import open from "../assets/images/add-circle-outline.png";
import edit from "../assets/images/edit-outline.png";
import { AddressesContainer, AddressesList, AddressListItem, AddressFormContainer, AddressForm, TextLabel, TextInput, EditImg, DeleteImg } from "../assets/styles/AddressesStyles";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../contexts/TokenContext";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import styled from "styled-components";

const AddressesPage = () => {
    const [addresses, setAddresses] = useState(undefined);
    const [showForm, setShowForm] = useState(false);
    const [editButton, setEditButton] = useState(false);
    const [token] = useContext(TokenContext);

    const emptyForm = { firstName: "", lastName: "", address: "", cep: "", number: "", complement: "", district: "", city: "", estate: "", phone: "" };
    const [form, setForm] = useState(emptyForm);

    useEffect(() => {
        getAddresses(token);
    }, [setAddresses, token]);

    const getAddresses = async (theToken) => {
        const config = {
            headers: {
                Authorization: `Bearer ${theToken}`
            }
        };
        try {
            const res = await axios.get(`${BASE_URL}/addresses`, config);
            setAddresses(res.data);
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    const validateAddress = (form) => {
        const { cep, number, estate, phone } = form;
        const regex = /[A-Za-z]/;

        if (phone.includes("-") || regex.test(phone)) {
            alert("O telefone deve estar no formato do exemplo!");
            return;
        }

        if (regex.test(cep)) {
            alert("O cep deve conter apenas numeros!");
            return;
        }

        if (regex.test(number)) {
            alert("Não pode haver letras no número!");
            return;
        }

        if (estate.length > 2) {
            alert("O estado só deve conter duas letras");
            return;
        }

        return true;
    };

    const clearForm = () => {
        setForm(emptyForm);
    };

    const addAddress = async e => {
        e.preventDefault();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        if (validateAddress(form)) {
            const validForm = {
                ...form,
                phone: form.phone.replaceAll(" ", "")
            };

            try {
                await axios.post(`${BASE_URL}/addresses`, validForm, config);
                clearForm();
                await getAddresses(token);
            } catch (err) {
                alert(err.response.data.message);
            }
        }
    };

    const editForm = async (savedAddress, e) => {
        e.preventDefault();

        setForm(savedAddress);
        setShowForm(true);
        setEditButton(true);
    };

    const editAddress = async e => {
        e.preventDefault();

        const confirmed = window.confirm("Você tem certeza que deseja editar esse endereço?");

        const { _id, firstName, lastName, address, cep, number, complement, district, city, estate, phone } = form;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const payload = {
            firstName,
            lastName,
            address,
            cep,
            number,
            complement,
            district,
            city,
            estate,
            phone
        };

        if (confirmed) {
            try {
                await axios.put(`${BASE_URL}/addresses/${_id}`, payload, config);
                setShowForm(false);
                setEditButton(false);
                clearForm();
                getAddresses(token);
            } catch (err) {
                alert(err.response.data.message);
            }
        }
    };

    const ListOfAddresses = (list) => {
        const { firstName, lastName, address, cep, number, complement, district, city, estate } = list;
        return (
            <AddressListItem>
                <div>
                    <p>{`${firstName} ${lastName}`}</p>
                    <p>{`${address}, ${number} - ${complement}`}</p>
                    <p>{`${district} - ${city} - ${estate}`}</p>
                    <p>{`${cep}`}</p>
                </div>
                <div>
                    <button>
                        <DeleteImg
                            alt="ícone de deletar"
                            src={close}
                        />
                    </button>
                    <button onClick={e => editForm(list, e)}>
                        <EditImg
                            alt="ícone de editar"
                            src={edit}
                        />
                    </button>
                </div>
            </AddressListItem>
        );
    };

    const setFormStatus = () => {
        if (showForm === false) {
            setShowForm(true);
        } else {
            setShowForm(false);
        }
    };

    const handleForm = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <AccountContainer>
            <AccountMenu />
            <AddressesContainer>
                <AddressesList>
                    {!addresses
                        ?
                        <p>loading</p>
                        :
                        addresses.map(a => <ListOfAddresses
                            key={a._id}
                            {...a}
                        />)
                    }
                </AddressesList>
                <AddressFormContainer>
                    <p>Adicione um novo endereço</p>
                    <button onClick={setFormStatus}>
                        <img
                            alt="ícone de adicionar"
                            src={open}
                        />
                    </button>
                    {showForm
                        ?
                        <AddressForm>
                            <TextLabel htmlFor="cep">CEP</TextLabel>
                            <TextInput
                                type="text"
                                id="cep"
                                name="cep"
                                value={form.cep}
                                onChange={handleForm}
                                placeholder="Digite o CEP"
                                required
                            />
                            <TextLabel htmlFor="firstName">Nome</TextLabel>
                            <TextInput
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleForm}
                                placeholder="Digite o nome"
                            />
                            <TextLabel htmlFor="lastName">Sobrenome</TextLabel>
                            <TextInput
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleForm}
                                placeholder="Digite o sobrenome"
                                required
                            />
                            <TextLabel htmlFor="address">Endereço</TextLabel>
                            <TextInput
                                type="text"
                                id="address"
                                name="address"
                                value={form.address}
                                onChange={handleForm}
                                placeholder="Digite o endereço"
                                required
                            />
                            <TextLabel htmlFor="number">Número</TextLabel>
                            <TextInput
                                type="text"
                                id="number"
                                name="number"
                                value={form.number}
                                onChange={handleForm}
                                placeholder="Digite o número"
                                required
                            />
                            <TextLabel htmlFor="complement">Complemento (opcional)</TextLabel>
                            <TextInput
                                type="text"
                                id="complement"
                                name="complement"
                                value={form.complement}
                                onChange={handleForm}
                                placeholder="Complemento..."
                                required
                            />
                            <TextLabel htmlFor="district">Bairro</TextLabel>
                            <TextInput
                                type="text"
                                id="district"
                                name="district"
                                value={form.district}
                                onChange={handleForm}
                                placeholder="Digite o bairro"
                                required
                            />
                            <TextLabel htmlFor="city">Cidade</TextLabel>
                            <TextInput
                                type="text"
                                id="city"
                                name="city"
                                value={form.city}
                                onChange={handleForm}
                                placeholder="Digite a cidade"
                                required
                            />
                            <TextLabel htmlFor="estate">Estado</TextLabel>
                            <p>ex: SP</p>
                            <TextInput
                                type="text"
                                id="estate"
                                name="estate"
                                value={form.estate}
                                onChange={handleForm}
                                placeholder="Digite o estado"
                                required
                            />
                            <TextLabel htmlFor="phone">Celular</TextLabel>
                            <p>ex: (11) 9 98768765</p>
                            <TextInput
                                type="text"
                                id="phone"
                                name="phone"
                                value={form.phone}
                                onChange={handleForm}
                                placeholder="Digite o celular"
                                required
                            />
                            {
                                !editButton
                                    ?
                                    <button onClick={e => addAddress(e)}>Cadastrar</button>
                                    :
                                    <button onClick={e => editAddress(e)}>Editar</button>
                            }

                        </AddressForm>
                        :
                        ""
                    }
                </AddressFormContainer>
            </AddressesContainer>
            <Div></Div>
        </AccountContainer>
    );
};

const Div = styled.div`
    margin-bottom: 1000px;
`;

export default AddressesPage;