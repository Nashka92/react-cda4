import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/exercice_10/routes/HomePage";
import ErrorPage from "./components/exercice_10/routes/ErrorPage";
import DetailsPage from "./components/exercice_10/routes/DetailsPage";
import FavouritePage from "./components/exercice_10/routes/FavouritePage";
import { FavoritesProvider } from "./components/exercice_10/utils/useFavorites";

const AppExoDix = () => {
  return (
    <Router>
      <FavoritesProvider>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:cca3" element={<DetailsPage />} />
            <Route path="/favourite" element={<FavouritePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </FavoritesProvider>
    </Router>
  );
};

export default AppExoDix;
