import React, { useRef } from "react";

const LoginForm = ({loginProps}) => {
    // Utilisation du hook useRef pour les champs de formulaire
    // Cela évite les re-renders inutiles lors de la saisie des données
    const usernameRef = useRef();
    const passwordRef = useRef();

    // Fonction pour la gestion du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // Evite le rechargement de la page page lors de la soumission du formulaire.
        const username = usernameRef.current.value; // Ici récupèrent les valeurs actuelles des 2 champs
        const password = passwordRef.current.value;
        loginProps(username, password); // Appelle la fonction loginProps qui est passé en props. Il permet une interaction entre le composant enfant (LoginForm) et le composant parent (App).
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom utilisateur:</label>
                <input type="text" ref={usernameRef}/> 
            </div>
            <div>
                <label>Mot de passe:</label>
                <input type="password" ref={passwordRef}/>
            </div>
            <button type="submit">Connexion</button>
        </form>
    );
};

export default LoginForm;

