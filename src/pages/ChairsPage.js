import { ProductsTitle } from "../components/ProductsTitle";
import { ProductsContainer, ProductsUl, ListItem } from "../common.js/common";
import { BASE_URL } from "../constants/url";
import { ProductsMenu } from "../components/ProductsMenu";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/context";
import { useNavigate } from "react-router-dom";

export const ChairsPage = () => {
    const { products } = useContext(AppContext);
    const [chairs, setChairs] = useState(undefined);

    const navigate = useNavigate();

    useEffect(() => {
        filterProduct(products);
    }, [products]);

    const filterProduct = products => {
        const chairs = products.filter(p => p.type === "cadeira");
        setChairs(chairs);
    };

    const ListOfProducts = ({ name, price, image }) => {
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

                    <button onClick={() => navigate("/carrinho")}>
                        Comprar
                    </button>
                </div>
            </ListItem>
        );
    };

    const ProductsDisplay = () => {
        if (chairs === undefined) {
            return <div>Loading...</div>;
        }

        return (
            <ProductsUl>
                {chairs.map(p => <ListOfProducts
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

export default ChairsPage;