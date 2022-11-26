import { ProductsTitle } from "../components/ProductsTitle";
import { ProductsContainer, ProductsUl, ListItem } from "../common.js/common";
import { BASE_URL } from "../constants/url";
import { ProductsMenu } from "../components/ProductsMenu";
import { useContext, useEffect } from "react";
import { AppContext } from "../components/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CartContext from "../contexts/CartContext";

export const ProductsPage = () => {
    const { products, setProducts } = useContext(AppContext);
    const [cart, setCart] = useContext(CartContext);

    const navigate = useNavigate();

    useEffect(() => {
        getProducts(setProducts);
    }, [setProducts]);

    const getProducts = async (setProductsFn) => {
        try {
            const res = await axios.get(`${BASE_URL}/products`);
            setProductsFn(res.data);
        } catch (err) {
            alert(err.response.data.message);
        }
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
        if (products === undefined) {
            return <div>Loading...</div>;
        }

        return (
            <ProductsUl>
                {products.map(p => <ListOfProducts
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

export default ProductsPage;