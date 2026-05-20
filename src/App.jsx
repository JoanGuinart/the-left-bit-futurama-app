import useCharacters from "@hooks/useCharacters";
import useCharacter from "./hooks/useCharacter";

function App() {
  const id = 1;
  const { characters, loading, error } = useCharacters();
  const {
    character,
    loading: characterLoading,
    error: characterError,
  } = useCharacter(id);

  if (loading || characterLoading) return <p>Loading...</p>;
  if (error || characterError) return <p style={{ color: "red" }}>Error!</p>;

  return (
    <ul>
      {characters.map((c) => (
        <li key={c.id}>
          {c.name.first} {c.name.last}
        </li>
      ))}
      <li>
        <h2>Character with id: {id} Details</h2>
        {character && (
          <p>
            {character.name.first} {character.name.last}
          </p>
        )}
      </li>
    </ul>
  );
}

export default App;
