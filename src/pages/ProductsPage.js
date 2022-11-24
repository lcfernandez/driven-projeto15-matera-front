import { ProductsTitle } from "../components/ProductsTitle";
import { ProductsContainer, ProductsUl, ListItem } from "../common.js/common";
import { BASE_URL } from "../constants/url";
import { SideMenu } from "../components/SideMenu";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/context";
import axios from "axios";

export const ProductsPage = () => {
    const { products, setProducts } = useContext(AppContext);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/products`);
            setProducts(res.data);
        } catch (err) {
            alert(err.response.data.message);
        }
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
                <SideMenu />
                <ProductsDisplay />
            </ProductsContainer>
        </>
    );
};

export default ProductsPage;