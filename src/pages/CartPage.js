import CartItem from "../components/CartItem";

import CartContext from "../contexts/CartContext";
import TokenContext from "../contexts/TokenContext";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CartPage({ shipping, setShipping, zipCode, setZipCode }) {
    const [cart] = useContext(CartContext);
    const [token] = useContext(TokenContext);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    function calculateShipping(e) {
        e.preventDefault();

        if (zipCode.length < 9) {
            setShipping("a definir");
        } else {
            localStorage.setItem("zipCode", zipCode);
            setShipping("350");
        }
    }

    function calculateSubtotal() {
        let subtotal = 0;
        cart.forEach(item => subtotal += Number(item.sumPrice));
        return subtotal;
    }

    function calculateTotal() {
        if (isNaN(Number(shipping))) {
            return "a definir";
        }

        return Number(calculateSubtotal()) + Number(shipping);
    }

    function handleCart() {
        return (
            cart.map((item, index) =>
                <CartItem
                    image={item.image}
                    index={index}
                    key={index}
                    name={item.name}
                    price={item.price}
                    qtd={item.qtd}
                    sumPrice={item.sumPrice}
                />
            )
        );
    }

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

                <form onSubmit={e => calculateShipping(e)}>
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
                            <th>{calculateSubtotal()}</th>
                        </tr>
                        <tr>
                            <th>Frete</th>
                            <th>{shipping}</th>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <th>{calculateTotal()}</th>
                        </tr>
                    </tbody>
                </table>

                <Link to={token ? "/pedido" : "/login"}>
                    <button>Finalizar pedido</button>
                </Link>
                <Link to="/produtos">
                    <button>Continuar comprando</button>
                </Link>
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

    tr {
        th:nth-child(2) {
            text-align: right;
        }
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
