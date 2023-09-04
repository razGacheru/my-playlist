import ListHeader from "./components/ListHeader";
import { useEffect, useState } from "react";
import ListItem from "./components/ListItem";

function App() {
  const userEmail = "rj@gg.com";
  const [playlist, setPlaylist] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/playlist/${userEmail}`
      );
      const json = await response.json();
      setPlaylist(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getData, []);
  const sortedPlaylist = playlist?.sort((a, b) => Date(a.date) - Date(b.date));

  return (
    <div className="app">
      <ListHeader listName={"Holiday tick list"} getData={getData} />
      {sortedPlaylist?.map((song) => (
        <ListItem key={song.id} song={song} getData={getData} />
      ))}
    </div>
  );
}

export default App;
