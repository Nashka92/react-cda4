import React, { useEffect, useState } from "react";

const UseEffectExo = ({ valueNum }) => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const produit = input1 * input2;
    setMessage(
      produit === valueNum
        ? `La multiplication des deux nombres (${input1} x ${input2}) fait bien ${valueNum}.`
        : `Les deux nombres multipliés (${input1} x ${input2}) ne font pas ${valueNum}`
    );
  }, [input1, input2, valueNum]);

  return (
    <>
      <input
        type="number"
        value={input1}
        placeholder="Entrez le 1er nombre"
        onChange={(e) => setInput1(e.target.value)}
      />
      X
      <input
        type="number"
        value={input2}
        placeholder="Entrez 2eme nombre"
        onChange={(e) => setInput2(e.target.value)}
      />
      <p>{message}</p>
    </>
  );
};

export default UseEffectExo;
