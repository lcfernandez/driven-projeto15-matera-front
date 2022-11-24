import { ProductsTitle } from "../components/ProductsTitle";
import { ProductsContainer, ProductsUl, ListItem } from "../common.js/common";
import { BASE_URL } from "../constants/url";
import { ProductsMenu } from "../components/ProductsMenu";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/context";

export const TablesPage = () => {
    const { products } = useContext(AppContext);
    const [tables, setTables] = useState(undefined);

    useEffect(() => {
        filterProduct(products);
    }, [products]);

    const filterProduct = products => {
        const tables = products.filter(p => p.type === "mesa");
        setTables(tables);
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