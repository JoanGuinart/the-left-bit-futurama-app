import { useState, useEffect } from "react";
import { getCharacterById } from "@api/futurama";

function useCharacter(id) {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacterById(id)
      .then(setCharacter)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { character, loading, error };
}

export default useCharacter;
