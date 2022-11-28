import { useContext } from "react";
import { BASE_URL } from "../constants/url";
import CartContext from "../contexts/CartContext";

export default function CartItem({ index, image, name, price, qtd, sumPrice }) {
    const [cart, setCart] = useContext(CartContext);

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
                        const cartUpdate = [...cart];
                        cartUpdate[index].sumPrice = ++cartUpdate[index].qtd * Number(price);
                        setCart(cartUpdate);
                    }}>
                        +
                    </button>

                    {qtd}

                    <button onClick={() => {
                        if (qtd > 1) {
                            const cartUpdate = [...cart];
                            cartUpdate[index].sumPrice = --cartUpdate[index].qtd * Number(price);
                            setCart(cartUpdate);
                        }
                    }}>
                        -
                    </button>
                </div>

                <button onClick={() => {
                    setCart(cart.filter((_, itemIndex) => itemIndex !== index));
                }}>
                    Remover
                </button>
            </td>

            <td>{sumPrice}</td>
        </tr>
    );
}
