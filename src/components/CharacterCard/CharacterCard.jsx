import PropTypes from "prop-types";
import styles from "./CharacterCard.module.scss";

function CharacterCard({
  name,
  image,
  age,
  gender,
  species,
  occupation,
  isFavorite,
  onClick,
}) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img
        src={image}
        alt={name}
        className={styles.image}
        onError={(e) => {
          e.target.src = "/placeholder.png";
        }}
      />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.meta}>
          {age} - {gender} - {species}
        </p>
        <p className={styles.occupation}>{occupation}</p>
      </div>
      <div className={styles.heart}>
        {isFavorite && <img src="/heart-full.png" alt="Favorite" />}
      </div>
    </div>
  );
}

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func,
};

CharacterCard.defaultProps = {
  isFavorite: false,
  onClick: () => {},
};

export default CharacterCard;
