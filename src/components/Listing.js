import React, { useState } from "react";

function Listing() {
  // ici j'utilise un useState([]) qui permet de définir une variable d'état
  // items qui est initialisée avec un tableau vide. setItems lui
  // est utilisée pour mettre à jour cette variable.
  const [items, setItems] = useState([]);

  // methode addItem qui sera appelé lorsque l'utilisateur aura cliqué. Un item
  // va s'incrémenter lorsqu'il sera cliqué
  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;

    // spread operator qui permet de copier les éléments existants et ajouter le nouvel élément à la fin.
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Liste d'éléments</h1>
      <button onClick={addItem}>Ajouter un élément</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Listing;
