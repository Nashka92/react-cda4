import axios from 'axios';

// Créer une nouvelle instance d'axios pour l'API de base
const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
});

// Fonction pour récupérer tous les pays
export const fetchAllCountries = () => api.get('/all');

// Fonction pour récupérer les détails d'un pays par cca3
export const fetchCountryDetail = (cca3) => api.get(`/alpha/${cca3}`);