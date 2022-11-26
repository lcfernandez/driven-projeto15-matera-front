import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";
import close from "../assets/images/close-outline.png";
import { AddressesContainer, AddressesList, AddressListItem } from "../assets/styles/AddressesStyles";

const addresses = [
    {
        _id: "1",
        firstName: "Bruna",
        lastName: "De Tal",
        cep: "07890765",
        address: "Rua do Sol",
        number: "100",
        complement: "apartamento 1",
        district: "Vila das Flores",
        city: "cidade",
        estate: "Sp",
        phone: "(11)987651423"
    },
    {
        _id: "2",
        firstName: "Afonso",
        lastName: "Silva",
        cep: "07890765",
        address: "Rua da Lua",
        number: "50",
        complement: "apartamento 25",
        district: "Vila das Árvores",
        city: "cidade",
        estate: "MG",
        phone: "(51)987651423"
    }
];

const AddressesPage = () => {

    const ListOfAddresses = (x) => {
        const { firstName, lastName, address, cep, number, complement, district, city, estate } = x;
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