import React, { useRef } from "react";
import "./App.css";
import logo from "./images/logo.png";
import backgroundImage from "./images/bg.jpg";
import { songsdata } from "./audio.js";

function App() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("./images/covers", false, /\.(png|jpe?g|svg|webp)$/)
  );
  const audios = importAll(require.context("./songs/", false, /\.mp3/));

  // const [isPlaying, setIsPlaying] = useState(false);
  const currentSong = useRef();

  const NavBar = () => {
    return (
      <nav>
        <ul>
          <li className="brand">
            <img src={logo} alt="music logo" />
            <span>Music</span>
          </li>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    );
  };

  // const playPause = (index) => {
  //   currentSong.current.play();

  //   setIsPlaying(!isPlaying);

  //   if (isPlaying) {
  //     currentSong.current.pause();
  //   } else {
  //     currentSong.current.play();
  //   }
  // };

  const play = (index) => {
    currentSong.current.src = audios[index];
    currentSong.current.play();
  };

  const pause = (index) => {
    currentSong.current.src = audios[index];
    currentSong.current.pause();
  };

  const Container = () => {
    return (
      <div
        className="container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="song_list">
          <h1>Bollywood Songs</h1>
          <div className="song_item_container">
            {songsdata.map((obj, index) => (
              <div className="song_item">
                <img key={index} src={images[index]} alt="info" />
                <span className="song_name">{obj.title}</span>

                <span className="songlistplay">
                  <button
                    className="button-play"
                    key={"button-play" + index}
                    onClick={() => {
                      play(index);
                    }}
                  >
                    Play
                  </button>

                  <button
                    className="button-pause"
                    key={"button-pause" + index}
                    onClick={() => {
                      pause(index);
                    }}
                  >
                    Pause
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const Player = () => {
    return <audio src={audios[0]} ref={currentSong}></audio>;
  };

  return (
    <div className="App">
      <NavBar />
      <Container />
      <Player />
    </div>
  );
}

export default App;
