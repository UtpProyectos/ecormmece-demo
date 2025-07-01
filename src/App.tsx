import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import type { Product } from "./types";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import "./App.css";
import "./index.css";

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((p) => p.id !== productId));
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <main className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-72px)]">
        <h1 className="text-4xl font-extrabold mb-6">Nuestros Productos</h1>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} onRemove={removeFromCart} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
