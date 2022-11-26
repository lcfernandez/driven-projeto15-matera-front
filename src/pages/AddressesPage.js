import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";
import close from "../assets/images/close-outline.png";
import { AddressesContainer, AddressesList, AddressListItem } from "../assets/styles/AddressesStyles";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../contexts/TokenContext";
import { BASE_URL } from "../constants/url";
import axios from "axios";

const AddressesPage = () => {
    const [addresses, setAddresses] = useState(undefined);
    const [token] = useContext(TokenContext);

    useEffect(() => {
        getAddresses();
    }, []);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const getAddresses = async () => {
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
            </AddressesContainer>
        </AccountContainer>
    );
};

export default AddressesPage;