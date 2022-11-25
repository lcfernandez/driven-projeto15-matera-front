import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";

const CardsPage = () => {

    return (
        <AccountContainer>
            <AccountMenu />
            <div className="main-conteudo">
               Cartões aqui
            </div>
        </AccountContainer>
    );
};

export default CardsPage;