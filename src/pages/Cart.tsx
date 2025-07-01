import type { Product } from "../types";

 
interface Props {
  cart: Product[];
}

function Cart({ cart }: Props) {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((p, i) => (
            <li key={i}>{p.name} - ${p.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
