import React from "react";
import { useCart } from "./share/CartContext";

const products = [
  {
    id: 1,
    name: "Coussin",
    description: "Coussin jaune design et tendance pour la saison",
    price: 9,
  },
  {
    id: 2,
    name: "Lampadaire",
    description: "Limineux au design industriel style bahaus",
    price: 26,
  },
  {
    id: 3,
    name: "Fauteuil",
    description: "Le fauteuil est un de nos produits emblématique.",
    price: 75,
  },
  {
    id: 4,
    name: "Table basse",
    description:
      "Facile à soulever et à déplacer du canapé vers votre fauteuil préféré.",
    price: 45,
  },
  {
    id: 5,
    name: "Miroir",
    description:
      "Le miroir trouve aussi bien sa place dans l'entrée que dans la salle de bain.",
    price: 17,
  },
  {
    id: 6,
    name: "Bibliothèque",
    description:
      "Un meuble toujours dans l’air du temps, plébiscité par les amateurs de livres.",
    price: 80,
  },
  {
    id: 7,
    name: "Canapé",
    description:
      "Un meuble toujours dans l’air du temps, plébiscité par les amateurs de livres.",
    price: 700,
  },
  {
    id: 8,
    name: "Lit",
    description:
      "Un meuble toujours dans l’air du temps, plébiscité par les amateurs de livres.",
    price: 300,
  }
];

const CardItems = () => {
  // ajouter au panier (il vient de mon context)
  const { cart, addToCart } = useCart();

  const total = cart.reduce((acc, curr) => acc + curr.price, 0);
  const displayCumulItem = cart.reduce((acc, curr) => acc + curr.name, 0);

  return (
    <div className="flex flex-wrap gap-4 m-[15px]">
      {products.map((product) => (
        <div className="card" style={{ width: "18rem" }} key={product.id}>
          <div className="card-body">
            <h6 className="card-title">
              {product.name}
            </h6>
            <p className="card-text">{product.description}</p>
            <p>Prix: {product.price}€</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      ))}
      <ul>
      <li className="border">{displayCumulItem}</li></ul>
      <p className="border">Total: {total}€</p>
    </div>
  );
};

export default CardItems;
