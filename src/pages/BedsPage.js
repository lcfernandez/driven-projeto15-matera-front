import { ProductsTitle } from "../components/ProductsTitle";
import { ProductsContainer, ProductsUl, ListItem } from "../common.js/common";
import { BASE_URL } from "../constants/url";
import { ProductsMenu } from "../components/ProductsMenu";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/context";

const BedsPage = () => {
    const { products } = useContext(AppContext);
    const [beds, setBeds] = useState(undefined);

    useEffect(() => {
        filterProduct(products);
    }, [products]);

    const filterProduct = products => {
        const beds = products.filter(p => p.type === "cama");
        setBeds(beds);
    };

    const ListOfProducts = ({ name, price, image }) => {
        return (
            <ListItem>
                <img
                    alt="imagem do produto"
                    src={`${BASE_URL}${image}`}
                />
                <h3>{name}</h3>
                <p>{price}</p>
            </ListItem>
        );
    };

    const ProductsDisplay = () => {
        if (beds === undefined) {
            return <div>Loading...</div>;
        }

        return (
            <ProductsUl>
                {beds.map(p => <ListOfProducts
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

export default BedsPage;