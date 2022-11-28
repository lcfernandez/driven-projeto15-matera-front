import { AccountContainer } from "../assets/styles/AccountStyle";
import { AccountMenu } from "../components/AccountMenu";
import { BASE_URL } from "../constants/url";
import TokenContext from "../contexts/TokenContext";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const PurchasePage = () => {
    const [token] = useContext(TokenContext);

    const [purchase, setPurchase] = useState(undefined);

    const { idPurchase } = useParams();

    function calculateTotal() {
        let subtotal = 0;
        purchase.products.forEach(item => subtotal += Number(item.sumPrice));

        return subtotal + Number(purchase.shipping);
    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios
            .get(`${BASE_URL}/purchases/${idPurchase}`, config)
            .then(res => setPurchase(res.data))
            .catch(err => alert(err.response.data.message));
    }, []);

    return (
        <AccountContainer>
            <AccountMenu />
            <div className="main-conteudo">
                <div>
                    Pedido {purchase && `${purchase.date} - ${purchase.time}`}
                </div>

                {purchase &&
                    <>
                        <table>
                            <tbody>    
                                {purchase.products.map(product =>
                                    <tr key={product.id}>
                                        <th>
                                            <PurchaseImg
                                                alt={`imagem de ${product.name}`}
                                                src={`${BASE_URL}${product.image}`}
                                            />
                                        </th>
                                        <th>{product.name}</th>
                                        <th>Qtd. {product.qtd}</th>
                                        <th>R$ {product.sumPrice}</th>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Frete</th>
                                    <th></th>
                                    <th>R$ {purchase.shipping}</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Total</th>
                                    <th></th>
                                    <th>R$ {calculateTotal()}</th>
                                </tr>
                            </tfoot>
                        </table>
                    
                        <h1>Entrega</h1>
                            <p>
                                {purchase.deliveryAddress.firstName} {purchase.deliveryAddress.lastName} <br />
                                {purchase.deliveryAddress.address}, {purchase.deliveryAddress.number} - {purchase.deliveryAddress.complement} <br />
                                {purchase.deliveryAddress.district} - {purchase.deliveryAddress.city}/{purchase.deliveryAddress.estate} <br />
                                {purchase.deliveryAddress.cep}
                            </p>

                        <h1>Pagamento</h1>
                            <p>
                                {purchase.paymentOption} {purchase.paymentComplement && purchase.paymentComplement.number}
                            </p>
                    </>
                }
            </div>
        </AccountContainer>
    );
};

const PurchaseImg = styled.img`
    width: 100px;
`

export default PurchasePage;