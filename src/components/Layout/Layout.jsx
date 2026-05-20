import { Outlet, useParams } from "react-router-dom";
import CharacterList from "@pages/CharacterList/CharacterList";
import useFavorites from "@hooks/useFavorites";
import styles from "./Layout.module.scss";

function Layout() {
  const { id } = useParams();
  const { toggle, isFav } = useFavorites();

  return (
    <div className={styles.layout}>
      <aside className={`${styles.sidebar} ${id ? styles.hidden : ""}`}>
        <CharacterList isFav={isFav} />
      </aside>
      <main className={`${styles.main} ${!id ? styles.hidden : ""}`}>
        <Outlet context={{ toggle, isFav }} />
      </main>
    </div>
  );
}

export default Layout;
