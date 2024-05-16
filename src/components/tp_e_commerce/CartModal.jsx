import React from 'react';
import { useCart } from "./share/CartContext";
import ReactModal from 'react-modal';

const CartModal = ({ isOpen,onCloseModal }) => { //isOpen est propre a react-modal c'est un booléan qui décrit si la modal devrait etre ouvert ou non
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal} // onRequestClose Fonction qui s'éxecute quand la modal est demandé a fermer
      style={{
        content: {
          top: '20%',
          left: '30%',
          right: '30%',
          bottom: 'auto',
          background: 'white',
          padding: '20px',
          border: '1px solid #ccc'
        },
      }}
    >
      <h2>Panier</h2>
      {cart.map(item => (
        <div key={item.id} className="border m-2">
          <span>{item.name} - {item.price}€</span>
          <button className='btn btn-danger' onClick={() => removeFromCart(item.id)}>Supprimer</button>
        </div>
      ))}
      <h3>Total: {total}€</h3>
      <button className='btn btn-primary' onClick={onCloseModal}>Fermer</button>

    </ReactModal>
  );
};

export default CartModal;

