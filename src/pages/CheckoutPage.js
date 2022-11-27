import CartContext from "../contexts/CartContext";

import { useContext } from "react";

export default function CheckoutPage({ shipping, zipCode }) {
    const [cart] = useContext(CartContext);
    
    return (
        <>
            Pedido

            {cart.map(item => item.name)}
            {zipCode}
            {shipping}
        </>
    );
}
