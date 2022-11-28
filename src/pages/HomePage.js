import homepage from "../assets/images/homepage.jpg";

import { BASE_URL } from "../constants/url";

import CartContext from "../contexts/CartContext";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function HomePage() {
    const [cart, setCart] = useContext(CartContext);

    const [newProducts, setNewProducts] = useState(undefined);

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${BASE_URL}/products?limit=8`)
            .then(res => setNewProducts(res.data))
            .catch(err => alert(err.response.data.message))
    }, []);

    return (
        <HomePageContainer>
            <Slogan>
                <img alt={"imagem com slogan"} src={homepage} />
            </Slogan>

            <div>
                Novidades
            </div>

            <NewProducts>
                <ul>
                    {newProducts && newProducts.map(product =>
                        <li key={product._id}>
                            <img
                                alt="imagem do produto"
                                src={`${BASE_URL}${product.image}`}
                            />
                            <div>
                                <span>
                                    <h3>{product.name}</h3>
                                    <p>{product.price}</p>
                                </span>
            
                                <button onClick={
                                    () => {
                                        const itemIndex = cart.findIndex(item => item.id === product._id);
                                        
                                        if (itemIndex > -1) {
                                            const cartUpdate = [...cart];
                                            cartUpdate[itemIndex].sumPrice = ++cartUpdate[itemIndex].qtd * Number(product.price);
                                            setCart(cartUpdate);
                                        } else {
                                            setCart([...cart, {
                                                id: product.id,
                                                image: product.image,
                                                name: product.name,
                                                price: product.price,
                                                qtd: 1,
                                                sumPrice: product.price
                                            }]);
                                        }
            
                                        navigate("/carrinho");
                                    }
                                }>
                                    Comprar
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
            </NewProducts>
        </HomePageContainer>
    );
}

const HomePageContainer = styled.div`
    img {
        width: 200px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        
    }
`;

const NewProducts = styled.div`
    text-align: center;
`;

const Slogan = styled.div`
    img {
        width: 100%;
    }
`;
