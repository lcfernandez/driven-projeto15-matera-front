import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";
import { BASE_URL } from "../constants/url";
import TokenContext from "../contexts/TokenContext";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PurchasesPage = () => {
    const [token] = useContext(TokenContext);

    const [purchases, setPurchases] = useState(undefined);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios
            .get(`${BASE_URL}/purchases`, config)
            .then(res => setPurchases(res.data))
            .catch(err => alert(err.response.data.message));
    }, []);

    return (
        <AccountContainer>
            <AccountMenu />
            <div className="main-conteudo">
                <div>
                    Seus pedidos aqui.
                </div>

                {purchases && purchases.length > 0 ?
                    <table>
                        <tbody>
                            {purchases.map(purchase =>
                                <tr key={purchase.id}>
                                    <th>{purchase.date} - {purchase.time}</th>
                                    <th>
                                        <PurchasesImg
                                            alt={`imagem de ${purchase.firstProduct}`}
                                            src={`${BASE_URL}${purchase.firstProductImage}`}
                                        />

                                        {purchase.firstProduct} {purchase.remainingProducts > 0 && `e mais ${purchase.remainingProducts} produtos`}
                                    </th>
                                    <th>
                                        <Link to={`/conta/pedidos/${purchase.id}`}>
                                            <button>
                                                Ver pedido
                                            </button>
                                        </Link>
                                    </th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                : "Você ainda não tem pedidos concluidos."}
            </div>
        </AccountContainer>
    );
};

const PurchasesImg = styled.img`
    width: 100px;
`

export default PurchasesPage;