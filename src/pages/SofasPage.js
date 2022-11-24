import { ProductsTitle } from "../components/ProductsTitle";
import { ProductsContainer, ProductsUl, ListItem } from "../common.js/common";
import { SideMenu } from "../components/SideMenu";
import { useEffect, useState } from "react";

const produtos = [
    {
        _id: "637e8782e6cb1ac3c3a48f63",
        name: "Cama Turquesa",
        price: "12300",
        date: "24/11/2022",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        type: "cama"
    },
    {
        _id: "637f2679e6cb1ac3c3a48f70",
        name: "Sofa Platao",
        price: "139910",
        date: "24/11/2022",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        type: "sofa"
    },
    {
        _id: "637f26ace6cb1ac3c3a48f71",
        name: "Sofa Sócrates",
        price: "34990",
        date: "24/11/2022",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        type: "sofa"
    },
];

const SofasPage = () => {
    const [products, setProducts] = useState(undefined);

    const filterProduct = products => {
        const sofas = products.filter(p => p.type === "sofa");
        setProducts(sofas);
    };

    useEffect(() => {
        filterProduct(produtos);
    }, []);

    const ListOfProducts = ({ name, price, image }) => {
        return (
            <ListItem>
                <img
                    alt="imagem do produto"
                    src={image}
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

export default SofasPage;