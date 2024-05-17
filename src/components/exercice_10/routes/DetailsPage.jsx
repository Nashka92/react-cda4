import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCountryDetail } from "../service/api";
import { Link } from "react-router-dom";

const DetailsPage = () => {
  const { cca3 } = useParams();
  const [detailsCountry, setDetailsCountry] = useState();

  useEffect(() => {
    fetchCountryDetail(cca3)
      .then((response) => {
        setDetailsCountry(response.data[0]);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails:", error);
      });
  }, []);

  if (!detailsCountry) {
    return <div>Chargement ...</div>;
  }

  return (
    <div>
      <h2>{detailsCountry.name.common}</h2>
      <ul>
        <li>Capitale : {detailsCountry.capital}</li>
        <li>Continent : {detailsCountry.continents}</li>
      </ul>
      <Link to={"/"}>Retour</Link>
    </div>
  );
};

export default DetailsPage;
