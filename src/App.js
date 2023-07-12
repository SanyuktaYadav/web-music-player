import React from "react";
import "./App.css";
import logo from "./images/logo.png";
import backgroundImage from "./images/bg.jpg";
import { FaRegPlayCircle } from "react-icons/fa";
import { BiSkipPreviousCircle, BiSkipNextCircle } from "react-icons/bi";

function App() {
  const NavBar = () => {
    return (
      <nav>
        <ul>
          <li class="brand">
            <img src={logo} alt="spotify logo" />
            <span>Spotify</span>
          </li>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    );
  };

  const Container = () => {
    return (
      <div
        class="container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div class="song_list">
          <h1>Best of NCS - No Copyright Sounds</h1>
          <div class="song_item_container">
            <div class="song_item">
              <img alt="1" />
              <span class="song_name">First Song</span>
              <span class="songlistplay">
                <span class="timestamp">
                  05:34
                  <i id="0" class="far song_item_play fa-play-circle"></i>
                </span>
              </span>
            </div>

            <div class="song_item">
              <img alt="1" />
              <span class="song_name">First Song</span>
              <span class="songlistplay">
                <span class="timestamp">
                  05:34
                  <i id="1" class="far song_item_play fa-play-circle"></i>
                </span>
              </span>
            </div>

            <div class="song_item">
              <img alt="1" />
              <span class="song_name">First Song</span>
              <span class="songlistplay">
                <span class="timestamp">
                  05:34
                  <i id="2" class="far song_item_play fa-play-circle"></i>
                </span>
              </span>
            </div>

            <div class="song_item">
              <img alt="1" />
              <span class="song_name">First Song</span>
              <span class="songlistplay">
                <span class="timestamp">
                  05:34
                  <i id="3" class="far song_item_play fa-play-circle"></i>
                </span>
              </span>
            </div>

            <div class="song_item">
              <img alt="1" />
              <span class="song_name">First Song</span>
              <span class="songlistplay">
                <span class="timestamp">
                  05:34
                  <i id="4" class="far song_item_play fa-play-circle"></i>
                </span>
              </span>
            </div>

            <div class="song_item">
              <img alt="1" />
              <span class="song_name">First Song</span>
              <span class="songlistplay">
                <span class="timestamp">
                  05:34
                  <i id="5" class="far song_item_play fa-play-circle"></i>
                </span>
              </span>
            </div>

            <div class="song_item">
              <img alt="1" />
              <span class="song_name">First Song</span>
              <span class="songlistplay">
                <span class="timestamp">
                  05:34
                  <i id="6" class="far song_item_play fa-play-circle"></i>
                </span>
              </span>
            </div>

            <div class="song_item">
              <img alt="1" />
              <span class="song_name">First Song</span>
              <span class="songlistplay">
                <span class="timestamp">
                  05:34
                  <i id="7" class="far song_item_play fa-play-circle"></i>
                </span>
              </span>
            </div>

            <div class="song_item">
              <img alt="1" />
              <span class="song_name">First Song</span>
              <span class="songlistplay">
                <span class="timestamp">
                  05:34
                  <i id="8" class="far song_item_play fa-play-circle"></i>
                </span>
              </span>
            </div>

            <div class="song_item">
              <img alt="1" />
              <span class="song_name">First Song</span>
              <span class="songlistplay">
                <span class="timestamp">
                  05:34
                  <i id="9" class="far song_item_play fa-play-circle"></i>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div class="song_banner"></div>
      </div>
    );
  };

  const Bottom = () => {
    return (
      <div class="bottom">
        <input
          type="range"
          name="range"
          id="my_progress_bar"
          min="0"
          max="100"
          value="0"
        />
        <div class="icons">
          {
            //fontawesome icons
          }
          <BiSkipPreviousCircle size={42} />
          <FaRegPlayCircle size={42} />
          <BiSkipNextCircle size={42} />
        </div>

        <div class="song_info">
          <img src="playing.gif" width="42px" alt="" id="gif" />
          <span id="master_song_name"></span>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <NavBar />
      <Container />
      <Bottom />
    </div>
  );
}

export default App;
