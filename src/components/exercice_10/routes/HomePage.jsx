import React, { useState, useEffect } from "react";
import { fetchAllCountries } from "../service/api";
import { Link } from "react-router-dom";
import { useFavorites } from "../utils/useFavorites";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const { favorites, addCountryToFav } = useFavorites();

  useEffect(() => {
    fetchAllCountries()
      .then((response) => {
        // dans mon useEffect, je trie mon tableau par ordre alphabetique
        const sortedCountries = response.data.sort((a, b) => {
          return a.name.common.localeCompare(b.name.common);
        });
        setCountries(sortedCountries);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des pays:", error);
      });
  }, []);


  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: "#e3f2fd" }}>
        <input
          type="text"
          placeholder="Recherche un pays"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={"/favourite"} className="text-black">
          Mes favoris
        </Link>
      </nav>

      <h1>Liste des Pays</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {countries
          .filter((country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
          )
          .map((country) => (

            <div key={country.cca2} className="card" style={{ width: "18rem", background: '#EFF4FA' }}>
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <img
                  src={country.flags.png}
                  alt={`${country.name.common} flag`} 
                  style={{ width: "100px", height: "50px" }}
                />
                <Link to={`/detail/${country.cca3}`} className="btn btn-info">
                  Voir détails
                </Link>

                <div>
                <button
                  onClick={() => addCountryToFav(country)}
                  className="btn btn-primary"
                >
                  Ajouter aux favoris
                </button>
                </div>

              </div>
            </div>

          ))}
      </div>
      <div className="border">
        {favorites.map((fav) => (
          <div key={fav.cca3}>{fav.name.common}</div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
