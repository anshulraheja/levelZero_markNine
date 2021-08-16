import "../styles.css";
import { useState } from "react";

const songsDB = {
  EDM: [
    { title: "Eloquent JavaScript", artist: "4/5" },
    { title: "You Don't Know JS", artist: "3.5/5" }
  ],

  Rock: [
    {
      title: "Shiva Trilogy",
      artist: "5/5"
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      artist: "4.5/5"
    }
  ],
  Techno: [
    {
      title: "Never Split the Difference",
      artist: "3.5/5"
    },
    {
      title: "Loonshots",
      artist: "5/5"
    }
  ],
  Pop: [
    {
      title: "Never Split the Difference",
      artist: "3.5/5"
    },
    {
      title: "Loonshots",
      artist: "5/5"
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
      <div className="img"></div>
      <h1>My Song Recommendation App</h1>
      <p>
        These are my favourite songs. Select a genre of your choice to view the
        list
      </p>
      <div className="btn-container">
        {Object.keys(songsDB).map((genre) => (
          <button onClick={() => genreButtonhandler(genre)}>{genre}</button>
        ))}
      </div>
      <div className="song-container">
        <ul>
          {songsDB[genre].map((song) => (
            <li key={song.title}>
              <div> {song.title} </div>
              <div> {song.artist} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
