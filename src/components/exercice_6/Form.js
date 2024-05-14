import React, { useState } from "react";


const Form = ({ ajouterContact }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    ajouterContact({ nom, prenom, age });
    setNom("");
    setPrenom("");
    setAge("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};

export default Form;
