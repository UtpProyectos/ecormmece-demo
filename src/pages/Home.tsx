import ProductCard from "../components/ProductCard";
import type { Product } from "../types";
 

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Mouse", price: 25 },
];

interface Props {
  addToCart: (product: Product) => void;
}

function Home({ addToCart }: Props) {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Productos</h2>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
      ))}
    </div>
  );
}

export default Home;
