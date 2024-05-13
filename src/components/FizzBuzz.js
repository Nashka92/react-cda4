import React, { useState } from 'react';

function FizzBuzz() {
    // initialisation du useState a 0, le FizzBuzz  démarre à 0.
  const [number, setNumber] = useState(0);
  const maxValue = 100;

    // Afficher "FizzBuzz" si le nombre est un multiple de 3 et de 5.
    // Afficher "Fizz" si le nombre est un multiple de 3.
    // Afficher "Buzz" si le nombre est un multiple de 5.
  const fizzBuzzLogic = (num) => {
    if (num % 15 === 0) return 'FizzBuzz !';
    if (num % 3 === 0) return 'Fizz !';
    if (num % 5 === 0) return 'Buzz !';
    return num;
  };

  return (
    <div>
      <h1>FizzBuzz Game</h1>
      <p>Current Number: {fizzBuzzLogic(number)}</p>
      {/* Le bouton decrement est disabled si la valeur est à 0  j'utilise la propriété disabled pour ce faire*/}
      <button onClick={() => setNumber(number - 1)} disabled={number <= 0}>
        Decrement
      </button>
      {/* Le bouton increment est disabled si la valeur est à + de 100 (maxValue) */}
      <button onClick={() => setNumber(number + 1)} disabled={number >= maxValue}>
        Increment
      </button>
    </div>
  );
}

export default FizzBuzz;
