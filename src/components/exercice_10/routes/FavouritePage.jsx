import React from "react";
import { useFavorites } from "../utils/useFavorites";
import { Link } from "react-router-dom";

const FavouritePage = () => {
  const { favorites, removeCountryToFav } = useFavorites();

  return (
    <div>
      <div className="flex gap-4">
        <h5>Favoris</h5>
        <Link to={"/"}>Retour</Link>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          {favorites.map((fav) => (
            <div key={fav.cca3} className="card-text">
              {fav.name.common}{" "}
              <button onClick={() => removeCountryToFav(fav)}>Supprimer</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouritePage;
