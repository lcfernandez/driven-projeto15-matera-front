import { BASE_URL } from "../constants/url";

import CartContext from "../contexts/CartContext";
import TokenContext from "../contexts/TokenContext";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
    const [addresses, setAddresses] = useState([]);
    const [cards, setCards] = useState([]);
    const [cart] = useContext(CartContext);
    const [token] = useContext(TokenContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        
        axios
            .get(`${BASE_URL}/addresses`, config)
            .then(res => setAddresses(res.data))
            .catch(err => console.error(err.response.data.message || err.response.data));

        axios
            .get(`${BASE_URL}/cards`, config)
            .then(res => setCards(res.data))
            .catch(err => console.error(err.response.data.message || err.response.data));
    }, []);
    
    return (
        <CheckoutPageContainer>
            <div>
                Pedido
            </div>

            <h1>Produtos</h1>

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
            </table>

            <h1>Entrega</h1>
            
            {addresses.length > 0 ? addresses.map(address =>
                <button key={address._id}>
                        <p>{`${address.firstName} ${address.lastName}`}</p>
                        <p>{`${address.address}, ${address.number} - ${address.complement}`}</p>
                        <p>{`${address.district} - ${address.city} - ${address.estate}`}</p>
                        <p>{`${address.cep}`}</p>
                    </button>
                ) : "Você ainda não tem endereços cadastrados."}

            <Link to="/conta/enderecos">Cadastrar/editar endereço</Link>

            <h1>Pagamento</h1>

            {cards.length > 0 ? cards.map(card =>
                <button key={card._id}>
                        <p>{`${card.number}`}</p>
                    </button>
            ) : "Você ainda não tem cartões cadastrados."}         

            <Link to="/conta/cartoes">Cadastrar/editar cartões</Link>

            <ul>
                <li>
                    <button>Boleto bancário</button>
                </li>
                <li>
                    <button>Pix</button>   
                </li>
            </ul>
        </CheckoutPageContainer>
    );
}

const CheckoutPageContainer = styled.div`
    text-align: left;

    img {
        width: 100px;
    }
`;
