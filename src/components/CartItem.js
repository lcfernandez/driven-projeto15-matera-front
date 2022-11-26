import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import CartContext from "../contexts/CartContext";

export default function CartItem({ index, image, name, price, qtd, remove, setRemove }) {
    const [cart] = useContext(CartContext);
    const [sumPrice, setSumPrice] = useState(undefined);
    const [varQtd, setVarQtd] = useState(qtd);

    useEffect(() => {
        setVarQtd(qtd);
    }, [remove]);

    useEffect(() => {
        setSumPrice(varQtd * Number(price));
    }, [varQtd, remove]);

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
                <div>
                    <button onClick={() => {
                        cart[index].qtd++;
                        setVarQtd(varQtd + 1);
                    }}>
                        +
                    </button>

                    {varQtd}

                    <button onClick={() => {
                        if (varQtd > 1) {
                            cart[index].qtd--;
                            setVarQtd(varQtd - 1);
                        }
                    }}>
                        -
                    </button>
                </div>

                <button onClick={() => {
                    cart.splice(index, 1);
                    setRemove(!remove);
                }}>
                    Remover
                </button>
            </td>

            <td>{sumPrice}</td>
        </tr>
    );
}
