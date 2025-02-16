import React, { useState } from "react";

const GuessNumberGame = () => {
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 11)
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess) || numGuess < 0 || numGuess > 10) {
      setMessage("Zadejte platné číslo mezi 0-10.");
      return;
    }
    if (numGuess === targetNumber) {
      setMessage("Správně! Generuji nové číslo...");
      setScore(score + 1);
      setTargetNumber(Math.floor(Math.random() * 11));
    } else {
      setMessage("Špatně, zkuste to znovu!");
    }
    setGuess("");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Hádání čísla</h1>
      <p className="mb-2">Hádejte číslo mezi 0 a 10</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="border p-2 rounded mb-2"
      />
      <button
        onClick={handleGuess}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Hádat
      </button>
      <p className="mt-4 font-semibold">{message}</p>
      <p className="mt-2">Skóre: {score}</p>
    </div>
  );
};

export default GuessNumberGame;
