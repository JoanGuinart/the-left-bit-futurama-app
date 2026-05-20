import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useCharacters from "@hooks/useCharacters";
import CharacterCard from "@components/CharacterCard/CharacterCard";
import styles from "./CharacterList.module.scss";

function CharacterList({ isFav }) {
  const { characters, loading, error } = useCharacters();
  const navigate = useNavigate();

  if (loading) return <p className={styles.message}>Loading...</p>;
  if (error) return <p className={styles.message}>Something went wrong.</p>;
  if (!characters.length)
    return <p className={styles.message}>No characters found.</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Characters List</h1>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          name={`${character.name.first} ${character.name.last}`}
          image={character.images.main}
          age={character.age}
          gender={character.gender}
          species={character.species}
          occupation={character.occupation}
          isFavorite={isFav(character.id)}
          onClick={() => navigate(`/character/${character.id}`)}
        />
      ))}
    </div>
  );
}

CharacterList.propTypes = {
  isFav: PropTypes.func.isRequired,
};

export default CharacterList;
