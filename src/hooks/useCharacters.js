import { useState, useEffect } from "react";
import { getCharacters } from "@api/futurama";

function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacters()
      .then(setCharacters)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { characters, loading, error };
}

export default useCharacters;
