import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import CartContext from "../contexts/CartContext";

export default function CartItem({ id, image, name, price, qtd }) {
    const [cart, setCart] = useContext(CartContext);
    const [sumPrice, setSumPrice] = useState(undefined);
    const [varQtd, setVarQtd] = useState(qtd);

    useEffect(() => {
        setSumPrice(varQtd * Number(price));
    }, [varQtd]);

    return (
        <tr>
            <td>
                <img
                    alt="imagem do produto"
                    src={`${BASE_URL}${image}`}
                />
                {name}
            </td>
            <td>{price}</td>
            <td>
                <button onClick={() => {
                    setVarQtd(varQtd + 1);
                    cart.find(item => item.id === id).qtd++;
                }}>+</button>
                {varQtd}
                <button onClick={() => {
                    if (varQtd > 1) {
                        setVarQtd(varQtd - 1);
                        cart.find(item => item.id === id).qtd--;
                    }
                }}>-</button>
            </td>
            <td>{sumPrice}</td>
        </tr>
    );
}