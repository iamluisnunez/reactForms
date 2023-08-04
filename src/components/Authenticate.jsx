import { useState } from "react";

export default function Authenticate({ setToken }) {
  const handleCLick = async () => {
    const [error, setError] = useState(null);
    const [sucessMessage, setSuccessMessage] = useState(null);

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ${token}",
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h2>Authenticate</h2>;{successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleCLick}>Authenticate Token</button>
    </>
  );
}
