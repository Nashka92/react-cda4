import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addCountryToFav = (country) => {
    const isAlreadyFav = favorites.some(fav => fav.cca3 === country.cca3);
    if (!isAlreadyFav) {
      setFavorites([...favorites, country]);
    }
  };

  const removeCountryToFav = (country) => {
    setFavorites(favorites.filter(fav => fav.cca3 !== country.cca3));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addCountryToFav, removeCountryToFav }}>
      {children}
    </FavoritesContext.Provider>
  );
};
