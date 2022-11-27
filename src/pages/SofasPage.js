import { ProductsTitle } from "../components/ProductsTitle";
import { ProductsContainer, ProductsUl, ListItem } from "../common.js/common";
import { BASE_URL } from "../constants/url";
import { ProductsMenu } from "../components/ProductsMenu";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import axios from "axios";

const SofasPage = () => {
    const [products, setProducts] = useState(undefined);
    const [sofas, setSofas] = useState(undefined);
    const [cart, setCart] = useContext(CartContext);

    const navigate = useNavigate();

    useEffect(() => {
        getProducts();
    }, [setProducts]);

    const getProducts = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/products`);
            setProducts(res.data);
            filterProduct(res.data);
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    const filterProduct = products => {
        const sofas = products.filter(p => p.type === "sofa");
        setSofas(sofas);
    };

    const ListOfProducts = ({ id, name, price, image }) => {
        return (
            <ListItem>
                <img
                    alt="imagem do produto"
                    src={`${BASE_URL}${image}`}
                />
                <div>
                    <span>
                        <h3>{name}</h3>
                        <p>{price}</p>
                    </span>

                    <button onClick={
                        () => {
                            const itemIndex = cart.findIndex(item => item.id === id);

                            if (itemIndex > -1) {
                                const cartUpdate = [...cart];
                                cartUpdate[itemIndex].sumPrice = ++cartUpdate[itemIndex].qtd * Number(price);
                                setCart(cartUpdate);
                            } else {
                                setCart([...cart, { id, image, name, price, qtd: 1, sumPrice: price}]);
                            }

                            navigate("/carrinho");
                        }
                    }>
                        Comprar
                    </button>
                </div>
            </ListItem>
        );
    };

    const ProductsDisplay = () => {
        if (sofas === undefined) {
            return <div>Loading...</div>;
        }

        return (
            <ProductsUl>
                {sofas.map(p => <ListOfProducts
                    key={p._id}
                    id={p._id}
                    name={p.name}
                    price={p.price}
                    image={p.image}
                />)}
            </ProductsUl>
        );
    };

    return (
        <>
            <ProductsTitle />
            <ProductsContainer>
                <ProductsMenu />
                <ProductsDisplay />
            </ProductsContainer>
        </>
    );
};

export default SofasPage;