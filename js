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
      setMessage("🎉 Správně! Získáváš bod.");
      setScore(score + 1);
    } else {
      setMessage("❌ Špatně, zkus to znovu.");
    }
  };

  // Funkce pro zachycení stisknutí Enteru
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkGuess();
    }
  };

  return (
    <div style={styles.container}>
      <h1>🎯 Hádej číslo (0-10)</h1>
      <button onClick={generateNumber} style={styles.button}>
        🎲 Generovat číslo
      </button>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        onKeyDown={handleKeyDown} // Přidání event listeneru
        style={styles.input}
      />
      <button onClick={checkGuess} style={styles.button}>
        ✅ Ověřit
      </button>
      <p style={styles.message}>{message}</p>
      <p style={styles.score}>🏆 Skóre: {score}</p>
    </div>
  );
}

// CSS styly
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#282c34",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#61dafb",
    color: "#000",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    textAlign: "center",
    margin: "10px",
    borderRadius: "5px",
    border: "2px solid white",
    backgroundColor: "#fff",
    color: "#000",
  },
  message: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  score: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default App;
