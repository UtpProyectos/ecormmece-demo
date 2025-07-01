import type { Product } from "../types";

 

interface Props {
  product: Product;
  onAdd: () => void;
}

function ProductCard({ product, onAdd }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h4>{product.name}</h4>
      <p>Precio: ${product.price}</p>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
