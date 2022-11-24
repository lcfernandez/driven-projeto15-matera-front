import { ProductsTitle } from "../components/ProductsTitle";
import { ProductsContainer, ProductsUl, ListItem } from "../common.js/common";
import { BASE_URL } from "../constants/url";
import { SideMenu } from "../components/SideMenu";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/context";

const SofasPage = () => {
    const { products } = useContext(AppContext);
    const [sofas, setSofas] = useState(undefined);

    useEffect(() => {
        filterProduct(products);
    }, [products]);

    const filterProduct = products => {
        const sofas = products.filter(p => p.type === "sofa");
        setSofas(sofas);
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
                <SideMenu />
                <ProductsDisplay />
            </ProductsContainer>
        </>
    );
};

export default SofasPage;