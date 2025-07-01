import type { Product } from "../types";

interface Props {
  product: Product;
  onAdd: () => void;
}

function ProductCard({ product, onAdd }: Props) {
  return (
    <div className="border border-gray-300 p-4 mb-4 rounded-xl shadow-sm bg-white">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h4 className="text-lg font-semibold text-gray-800 ">{product.name}</h4>
      <p className="text-sm text-gray-600 ">Precio: ${product.price}</p>
      <button
        onClick={onAdd}
        className="mt-2 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
