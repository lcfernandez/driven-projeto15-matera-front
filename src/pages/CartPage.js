import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function CartPage() {
    const [cart, setCart] = useContext(CartContext);

    return (
        <>
            Carrinho

            {cart.map(item => item.name)}
        </>
    );
}
