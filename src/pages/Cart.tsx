import type { Product } from "../types";

interface Props {
  cart: Product[];
  onRemove: (productId: number) => void;
}

function Cart({ cart, onRemove }: Props) {
  return (
    <div className="p-4 bg-white  rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 ">Carrito</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600  ">No hay productos en el carrito.</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((p, i) => (
            <li
              key={i}
              className="flex justify-between items-center border border-gray-200   rounded-md p-3 bg-gray-50"
            >
              <div className="flex items-center space-x-4">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                )}
                <span className="font-medium text-gray-700 ">{p.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600  ">${p.price}</span>
                <button
                  onClick={() => onRemove(p.id)}
                  className="text-red-600 hover:text-red-800 focus:outline-none"
                  aria-label={`Quitar ${p.name} del carrito`}
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
