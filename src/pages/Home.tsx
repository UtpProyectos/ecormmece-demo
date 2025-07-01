import ProductCard from "../components/ProductCard";
import type { Product } from "../types";

const products: Product[] = [
  {
    id: 1,
    name: "Laptop Gamer",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Mouse Inalámbrico",
    price: 25,
    image: "https://minisocl.vtexassets.com/arquivos/ids/254214/Mouse-Inhalambrico-Ultrafino-Elegante-Blanco-Blanco-3-5503.jpg?v=638186097836800000",
  },
  {
    id: 3,
    name: "Teclado Mecánico",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Monitor 24\" Full HD",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Auriculares Bluetooth",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Webcam HD",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

interface Props {
  addToCart: (product: Product) => void;
}

function Home({ addToCart }: Props) {
  return (
    <div className=" bg-gray-50 ">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
        ))}
      </div>
    </div>
  );
}

export default Home;
