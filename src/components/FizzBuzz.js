import React, { useState } from 'react';

function FizzBuzz() {
    // initialisation du useState a 0, le FizzBuzz  démarre à 0.
  const [number, setNumber] = useState(0);
  const maxValue = 100;

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
      <button onClick={() => setNumber(number - 1)} disabled={number <= 0}>
        Decrement
      </button>
      <button onClick={() => setNumber(number + 1)} disabled={number >= maxValue}>
        Increment
      </button>
    </div>
  );
}

export default FizzBuzz;
