import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";

const PurchasesPage = () => {
    return (
        <AccountContainer>
            <AccountMenu />
            <div className="main-conteudo">
                Seus pedidos aqui.
            </div>
        </AccountContainer>
    );
};

export default PurchasesPage;