import { BASE_URL } from "../constants/url";

import CartContext from "../contexts/CartContext";
import TokenContext from "../contexts/TokenContext";

import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function CheckoutPage() {
    const [cart, setCart] = useContext(CartContext);
    const [token] = useContext(TokenContext);

    const [addresses, setAddresses] = useState([]);
    const [cards, setCards] = useState([]);
    const [deliveryAddress, setDeliveryAddress] = useState(
        JSON.parse(localStorage.getItem("deliveryAddress")) || undefined
    );
    const [disabled, setDisabled] = useState(false);
    const [paymentComplement, setPaymentComplement] = useState(
        JSON.parse(localStorage.getItem("paymentComplement")) || undefined
    );
    const [paymentOption, setPaymentOption] = useState(
        localStorage.getItem("paymentOption") || undefined
    );
    const [shipping, setShipping] = useState(
        localStorage.getItem("deliveryAddress") ? "350" : "a definir"
    );

    const navigate = useNavigate();

    function calculateTotal() {
        if (isNaN(Number(shipping))) {
            return "a definir";
        }

        let subtotal = 0;
        cart.forEach(item => subtotal += Number(item.sumPrice));

        return subtotal + Number(shipping);
    }

    function finishPurchase() {
        setDisabled(true);

        const date = new Date();
        const day = date.getDate();
        const month = (date.getMonth() + 1);
        const year = date.getFullYear();
        const hour = date.getHours();
        const minutes = date.getMinutes();

        const body = {
            products: cart,
            deliveryAddress,
            shipping,
            paymentOption,
            paymentComplement,
            date: `${day}/${month}/${year}`,
            time: `${hour}:${minutes}`
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios
            .post(`${BASE_URL}/purchases`, body, config)
            .then(() => {
                alert("Seu pedido foi concluído com sucesso! Aguarde o e-mail com informação/confirmação do meio de pagamento escolhido!");
                
                setCart([]);
                localStorage.removeItem("cart");
                localStorage.removeItem("deliveryAddress");
                localStorage.removeItem("paymentComplement");
                localStorage.removeItem("paymentOption");
                localStorage.removeItem("zipCode");

                navigate("/");

            })
            .catch(err => {
                alert(err.response.data.message);
                setDisabled(false);
            });
    }

    function handleDeliveryAddress(address) {
        setShipping("350");
        setDeliveryAddress(address);
        localStorage.setItem("deliveryAddress", JSON.stringify(address));
    }

    function handlePaymentOption(payment) {
        let option;

        if (payment === "Boleto bancário" || payment === "Pix") {
            option = payment;
            localStorage.removeItem("paymentComplement");
        } else {
            option = "Cartão";
            setPaymentComplement(payment);    
            localStorage.setItem("paymentComplement", JSON.stringify(payment));
        }

        setPaymentOption(option);
        localStorage.setItem("paymentOption", option);
    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        
        axios
            .get(`${BASE_URL}/addresses`, config)
            .then(res => setAddresses(res.data))
            .catch(err => alert(err.response.data.message));

        axios
            .get(`${BASE_URL}/cards`, config)
            .then(res => setCards(res.data))
            .catch(err => alert(err.response.data.message));
    }, []);


    if (!token || token === "") {
        return (
            <div>
                Você precisa estar logado para efetuar o seu pedido.
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div>
                Adicione produtos ao seu carrinho.
            </div>
        )
    }
    
    return (
        <CheckoutPageContainer>
            <div>
                Pedido
            </div>

            <h1>Resumo da compra</h1>

            <table>
                <tbody>    
                    {cart.map((item, index) =>
                        <tr key={index}>
                            <th><img alt={`imagem de ${item.name}`} src={`${BASE_URL}${item.image}`} /></th>
                            <th>{item.name}</th>
                            <th>Qtd. {item.qtd}</th>
                            <th>R$ {item.sumPrice}</th>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Frete</th>
                        <th></th>
                        <th>R$ {shipping}</th>
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
            
            {addresses.length > 0 ? addresses.map(address =>
                <button key={address._id} onClick={() => handleDeliveryAddress(address)}>
                    <p>{`${address.firstName} ${address.lastName}`}</p>
                    <p>{`${address.address}, ${address.number} - ${address.complement}`}</p>
                    <p>{`${address.district} - ${address.city} - ${address.estate}`}</p>
                    <p>{`${address.cep}`}</p>
                </button>
            ) : "Você ainda não tem endereços cadastrados."}

            <Link to="/conta/enderecos">Cadastrar/editar endereço</Link>

            <h1>Pagamento</h1>

            <h2>Cartões</h2>

            {cards.length > 0 ? cards.map(card =>
                <button key={card._id} onClick={() => handlePaymentOption(card)}>
                        <p>{`${card.number}`}</p>
                    </button>
            ) : "Você ainda não tem cartões cadastrados."}         

            <Link to="/conta/cartoes">Cadastrar/editar cartões</Link>

            <h2>Outras Opções</h2>

            <ul>
                <li>
                    <button onClick={() => handlePaymentOption("Boleto bancário")}>Boleto bancário</button>
                </li>
                <li>
                    <button onClick={() => handlePaymentOption("Pix")}>Pix</button>
                </li>
            </ul>

            <button
                disabled={(!(cart && deliveryAddress && !isNaN(Number(shipping)) && paymentOption) || disabled) && true}
                onClick={finishPurchase}
            >
                Concluir compra
            </button>
        </CheckoutPageContainer>
    );
}

const CheckoutPageContainer = styled.div`
    text-align: left;

    img {
        width: 100px;
    }

    > button:last-child {
        margin: 20px 0 50px 0;
    }
`;
