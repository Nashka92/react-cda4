import React, { createContext, useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addCountryToFav = (country) => {
    const isAlreadyFav = favorites.some((fav) => fav.cca3 === country.cca3);
    if (!isAlreadyFav) {
      setFavorites([...favorites, country]);
      toast.success(`${country.name.common} a été ajouté aux favoris!`);
    } else {
      toast.info(`${country.name.common} est déjà dans les favoris.`);
    }
  };

  const removeCountryToFav = (country) => {
    setFavorites(favorites.filter((fav) => fav.cca3 !== country.cca3));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addCountryToFav, removeCountryToFav }}
    >
      <ToastContainer />
      {children}
    </FavoritesContext.Provider>
  );
};
