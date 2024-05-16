import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./components/tp_e_commerce/share/CartContext";
import CardItems from "./components/tp_e_commerce/CardItems";
import CartModal from "./components/tp_e_commerce/CartModal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false); // un state initialisé a false pour que la modal soit par défaut fermé

  // fonction onClose modal et elle inverse juste l'état de isModalOpen pour qu'elle se ferme
  const onCloseModal = () => {
    setModalOpen(!isModalOpen); // inversion de l'état de la modal
  };

  return (
    <div>
      <nav
        class="navbar bg-dark text-white"
        style={{ marginBottom: "15px" }}
        data-bs-theme="dark"
      >
        <div className="ml-[15px]">e-commerce</div>
        <button
          className="btn btn-primary"
          style={{ marginRight: "15px" }}
          onClick={setModalOpen}
        >
          Panier
        </button>
      </nav>
      <CartProvider>
        <CartModal isOpen={isModalOpen} onCloseModal={onCloseModal} />
        <CardItems />
      </CartProvider>
    </div>
  );
}

export default App;
