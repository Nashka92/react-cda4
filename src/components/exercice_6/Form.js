import React, { useState } from "react";

const Form = ({ ajouterContact }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = () => {
    const contact = { nom: nom, prenom: prenom, age: age };
    ajouterContact(contact);
    setNom("");
    setPrenom("");
    setAge("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label>Nom</label>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onInput={(e) => setNom(e.target.value)}
        />
        <label>Prénom</label>
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onInput={(e) => setPrenom(e.target.value)}
        />
        <label>Age</label>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onInput={(e) => setAge(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};

export default Form;
