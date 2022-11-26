import CartItem from "../components/CartItem";

import CartContext from "../contexts/CartContext";

import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

export default function CartPage() {
    const [cart, setCart] = useContext(CartContext);
    const [remove, setRemove] = useState(false);
    const [zipCode, setZipCode] = useState("");

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

    function postOptions(e) {
        e.preventDefault();
    }

    useEffect(() => {
        setCart(cart);
    }, [cart]);

    if (cart.length === 0) {
        return "O seu carrinho está vazio.";
    }

    return (
        <CartContainer>
            <div>
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

                <form onSubmit={e => postOptions(e)}>
                    Calcular frete e prazo

                    <input
                        maxLength="8"
                        onChange={e => setZipCode(e.target.value.replace(/[^\d]/g, "").replace(/(\d{5})(\d{3})/, "$1-$2"))}
                        placeholder="Informe o seu CEP"
                        value={zipCode}
                    />

                    <button>OK</button>
                </form>
            </div>

            <PurchasePreviousInfo>
                <div>
                    Pedido
                </div>

                <table>
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <th>Subtotal</th>
                        </tr>
                        <tr>
                            <th>Frete</th>
                            <th>Frete</th>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <th>Total</th>
                        </tr>
                    </tbody>
                </table>

                <button>Finalizar pedido</button>
                <button>Continuar comprando</button>
            </PurchasePreviousInfo>
        </CartContainer>
    );
}

const CartContainer = styled.div`
    display: flex;
    justify-content: space-between;

    img {
        width: 100px;
    }

    tr:nth-child(1) {
        text-align: left;
    }
`;

const PurchasePreviousInfo = styled.div`
    display: flex;
    flex-direction: column;

    table {
        text-align: left;
    }
`;
