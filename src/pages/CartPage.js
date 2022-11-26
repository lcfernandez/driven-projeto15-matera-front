import { BASE_URL } from "../constants/url";
import CartContext from "../contexts/CartContext";

import { useContext } from "react";
import styled from "styled-components";

export default function CartPage() {
    const [cart, setCart] = useContext(CartContext);

    return (
        <CartContainer>
            Carrinho

            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Preço unitário</th>
                        <th>Qtd.</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>    
                    {cart.map((item, index) =>
                        <tr key={index}>
                            <td>
                                <img
                                    alt="imagem do produto"
                                    src={`${BASE_URL}${item.image}`}
                                />
                                {item.name}
                            </td>
                            <td>{item.price}</td>
                            <td>{item.qtd}</td>
                            <td>{item.qtd * Number(item.price)}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </CartContainer>
    );
}

const CartContainer = styled.div`
    img {
        width: 100px;
    }

    tr:nth-child(1) {
        text-align: left;
    }
`;
