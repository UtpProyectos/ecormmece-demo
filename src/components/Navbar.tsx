import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  cartCount: number;
}

export function Navbar({ cartCount }: Props) {
  return (
    <header className="bg-gray-100 dark:bg-neutral-900 shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
        >
          Nuestra Tienda
        </Link>
        <div className="flex items-center space-x-6 text-gray-700 dark:text-gray-300 font-semibold">
          <Link
            to="/"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Inicio
          </Link>
          <Link
            to="/cart"
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative"
            aria-label="Ver carrito"
          >
            <FaShoppingCart className="w-5 h-5 mr-1" />
            Carrito
            {cartCount > 0 && (
              <span className="ml-1 inline-block bg-red-600 text-white rounded-full px-2 text-xs font-bold -translate-y-1">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
