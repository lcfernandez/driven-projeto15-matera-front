import CartItem from "../components/CartItem";

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
                        <CartItem
                            id={item.id}
                            image={item.image}
                            key={index}
                            name={item.name}
                            price={item.price}
                            qtd={item.qtd}
                        />
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
