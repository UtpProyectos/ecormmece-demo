import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import type { Product } from "./types";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/">Inicio</Link> | <Link to="/cart">Carrito ({cart.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
