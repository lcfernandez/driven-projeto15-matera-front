import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";
import close from "../assets/images/close-outline.png";
import { AdressesContainer, AdressesList, AdressListItem } from "../assets/styles/AdressesStyles";

const adresses = [
    {
        _id: "1",
        firstName: "Bruna",
        lastName: "De Tal",
        cep: "07890765",
        adress: "Rua do Sol",
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
        adress: "Rua da Lua",
        number: "50",
        complement: "apartamento 25",
        district: "Vila das Árvores",
        city: "cidade",
        estate: "MG",
        phone: "(51)987651423"
    }
];

const AdressesPage = () => {

    const ListOfAdresses = (x) => {
        const { firstName, lastName, adress, cep, number, complement, district, city, estate } = x;
        return (
            <AdressListItem>
                <div>
                    <p>{`${firstName} ${lastName}`}</p>
                    <p>{`${adress}, ${number} - ${complement}`}</p>
                    <p>{`${district} - ${city} - ${estate}`}</p>
                    <p>{`${cep}`}</p>
                </div>
                <button>
                    <img
                        alt="ícone de deletar"
                        src={close}
                    />
                </button>
            </AdressListItem>
        );
    };

    return (
        <AccountContainer>
            <AccountMenu />
            <AdressesContainer>
                <AdressesList>
                    {!adresses
                        ?
                        <p>loading</p>
                        :
                        adresses.map(c => <ListOfAdresses
                            key={c._id}
                            {...c}
                        />)
                    }
                </AdressesList>
            </AdressesContainer>
        </AccountContainer>
    );
};

export default AdressesPage;