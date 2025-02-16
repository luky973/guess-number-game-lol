import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(null);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 11);
    setNumber(randomNum);
    setMessage("");
    setGuess(""); // Vyčistí input
  };

  const checkGuess = () => {
    if (parseInt(guess) === number) {
      setMessage("Správně! Získáváš bod.");
      setScore(score + 1);
    } else {
      setMessage("Špatně, zkus to znovu.");
    }
  };

  // Funkce pro zachycení stisknutí Enteru
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkGuess();
    }
  };

  return (
    <div>
      <h1>Hádej číslo (0-10)</h1>
      <button onClick={generateNumber}>Generovat číslo</button>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        onKeyDown={handleKeyDown} // Přidání event listeneru
      />
      <button onClick={checkGuess}>Ověřit</button>
      <p>{message}</p>
      <p>Skóre: {score}</p>
    </div>
  );
}

export default App;
