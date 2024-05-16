import React, { createContext, useContext, useState } from 'react';

// dans le context, on va centraliser les méthodes qu'on va pouvoir
// réutiliser dans nos composants

const CartContext = createContext(); // créer un contexte

export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // ajouter un article au panier
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // supprimer du panier (pour la modal)
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
