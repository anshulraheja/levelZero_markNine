import "./Songs.css";
import { useState } from "react";
import musicImg from "../assets/music.png";

// song object array
const songsDB = {
  EDM: [
    { title: "Titanium", artist: "David Guetta" },
    { title: "One more Time", artist: "Daft Punk" }
  ],

  Rock: [
    {
      title: "A day in the life",
      artist: "The Beatles"
    },
    {
      title: "See Emily Play",
      artist: "Pink Floyd"
    }
  ],
  Techno: [
    {
      title: "I wanna go Bang",
      artist: "Bjarki"
    },
    {
      title: "The Bells",
      artist: "Jeff Mills"
    }
  ],
  Pop: [
    {
      title: "Dynamite",
      artist: "BTS"
    },
    {
      title: "Watermelon Sugar",
      artist: "HArry Styles"
    }
  ]
};

export default function Songs() {
  //state variable to store the selected genre
  const [genre, setGenre] = useState("Rock");

  //function to update genre on user selection
  function genreButtonhandler(genre) {
    setGenre(genre);
  }

  return (
    <div clasName="container">
      <div className="center-container">
        <h1>Song Recommendation App</h1>
        <div className="img">
          <img src={musicImg} height="200" alt="music" />
        </div>
      </div>
      <p className="text">
        These are my favourite songs. <br />
        Select a genre of your choice to view the list.
      </p>
      <div className="btn-container">
        {Object.keys(songsDB).map((genre) => (
          <button className="button" onClick={() => genreButtonhandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <div className="song-container">
        <ul className="list">
          {songsDB[genre].map((song) => (
            <li key={song.title} className="list-item">
              <div className="list-heading"> {song.title} </div>
              <div className="list-artist"> {song.artist} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
