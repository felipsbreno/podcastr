import { PlayerContextProvier } from "../context/PlayerContext";
import { Header } from "../components/Header";
import { Player } from "../components/Player";
import styles from "../styles/app.module.scss";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvier>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvier>
  );
}

export default MyApp;
