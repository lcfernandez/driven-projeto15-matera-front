import { BASE_URL } from "../constants/url";

import CartContext from "../contexts/CartContext";

import { useContext } from "react";
import styled from "styled-components";

export default function CheckoutPage({ shipping, zipCode }) {
    const [cart] = useContext(CartContext);
    
    return (
        <CheckoutPageContainer>
            <div>
                Pedido
            </div>

            <table>
                <tbody>    
                    {cart.map((item, index) =>
                        <tr key={index}>
                            <th><img alt={`imagem de ${item.name}`} src={`${BASE_URL}${item.image}`} /></th>
                            <th>{item.name}</th>
                            <th>Qtd. {item.qtd}</th>
                            <th>{item.sumPrice}</th>
                        </tr>
            )}
                </tbody>
            </table>
            
            {zipCode}
            {shipping}
        </CheckoutPageContainer>
    );
}

const CheckoutPageContainer = styled.div`
    img {
        width: 100px;
    }
`;
