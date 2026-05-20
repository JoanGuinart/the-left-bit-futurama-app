import { useState } from "react";
import { getFavorites, toggleFavorite } from "@utils/favorites";

function useFavorites() {
  const [favorites, setFavorites] = useState(getFavorites());

  const toggle = (id) => {
    const updated = toggleFavorite(id);
    setFavorites(updated);
  };

  const isFav = (id) => favorites.includes(id);

  return { toggle, isFav };
}

export default useFavorites;
