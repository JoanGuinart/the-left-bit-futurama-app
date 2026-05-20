import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import useCharacter from "@hooks/useCharacter";
import styles from "./CharacterDetail.module.scss";

function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggle, isFav } = useOutletContext();
  const { character, loading, error } = useCharacter(id);

  const favorite = isFav(Number(id));

  const handleToggleFavorite = () => {
    toggle(Number(id));
  };

  if (loading) return <p className={styles.message}>Loading...</p>;
  if (error) return <p className={styles.message}>Something went wrong.</p>;
  if (!character) return <p className={styles.message}>Character not found.</p>;

  const { name, images, age, gender, species, occupation, sayings } = character;

  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => navigate("/")}>
        ← Back
      </button>
      <div className={styles.detail}>
        <img
          src={images.main}
          alt={`${name.first} ${name.last}`}
          className={styles.image}
        />
        <div className={styles.info}>
          <div className={styles.nameRow}>
            <h1 className={styles.name}>
              {name.first} {name.last}
            </h1>
            <button className={styles.heart} onClick={handleToggleFavorite}>
              <img
                src={favorite ? "/heart-full.png" : "/heart-empty.png"}
                alt="Favorite"
              />
            </button>
          </div>
          <p className={styles.meta}>
            {age} - {gender} - {species}
          </p>
          <p className={styles.occupation}>{occupation}</p>
          <h2 className={styles.sayingsTitle}>Sayings</h2>
          <ul className={styles.sayings}>
            {sayings.map((saying, index) => (
              <li key={index}>{saying}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
