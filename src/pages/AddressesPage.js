import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";
import close from "../assets/images/close-outline.png";
import open from "../assets/images/add-circle-outline.png";
import { AddressesContainer, AddressesList, AddressListItem, AddressFormContainer, AddressForm, TextLabel, TextInput } from "../assets/styles/AddressesStyles";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../contexts/TokenContext";
import { BASE_URL } from "../constants/url";
import axios from "axios";

const AddressesPage = () => {
    const [addresses, setAddresses] = useState(undefined);
    const [showForm, setShowForm] = useState(false);
    const [token] = useContext(TokenContext);
    const [form, setForm] = useState({ firstName: "", lastName: "", address: "", cep: "", number: "", complement: "", district: "", city: "", estate: "", phone: "" });

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
                <button>
                    <img
                        alt="ícone de deletar"
                        src={close}
                    />
                </button>
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
                        addresses.map(c => <ListOfAddresses
                            key={c._id}
                            {...c}
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
                            <button >Cadastrar</button>
                        </AddressForm>
                        :
                        ""
                    }
                </AddressFormContainer>
            </AddressesContainer>
        </AccountContainer>
    );
};

export default AddressesPage;