import React, { useState } from "react";

function Inputs() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");

  return (
    <div>
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
      <p>
        Bonjour{" "}
        <strong>
          {prenom} {nom.toUpperCase()}
        </strong>
        , bienvenue sur l'application !
      </p>
    </div>
  );
}

export default Inputs;
