import { ProductsTitle } from "../components/ProductsTitle";
import { ProductsContainer, ProductsUl, ListItem } from "../common.js/common";
import { BASE_URL } from "../constants/url";
import { ProductsMenu } from "../components/ProductsMenu";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/context";
import { useNavigate } from "react-router-dom";
import CartContext from "../contexts/CartContext";

export const TablesPage = () => {
    const { products } = useContext(AppContext);
    const [tables, setTables] = useState(undefined);
    const [cart, setCart] = useContext(CartContext);

    const navigate = useNavigate();

    useEffect(() => {
        filterProduct(products);
    }, [products]);

    const filterProduct = products => {
        const tables = products.filter(p => p.type === "mesa");
        setTables(tables);
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
        if (tables === undefined) {
            return <div>Loading...</div>;
        }

        return (
            <ProductsUl>
                {tables.map(p => <ListOfProducts
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

export default TablesPage;