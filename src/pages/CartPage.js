import CartItem from "../components/CartItem";

import CartContext from "../contexts/CartContext";

import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

export default function CartPage() {
    const [cart, setCart] = useContext(CartContext);
    const [remove, setRemove] = useState(false);

    function handleCart() {
        return (
            cart.map((item, index) =>
                <CartItem
                    index={index}
                    image={item.image}
                    key={index}
                    name={item.name}
                    price={item.price}
                    qtd={item.qtd}
                    remove={remove}
                    setRemove={setRemove}
                />
            )
        );
    }

    useEffect(() => {
        setCart(cart);
    }, [cart]);

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
                    {handleCart()}
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
