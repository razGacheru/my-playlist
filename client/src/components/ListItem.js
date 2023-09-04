import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import Modal from "./Modal";

const ListItem = ({ song, getData }) => {
  const [modal, setShowModal] = useState(false);
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{song.title}</p>
        <ProgressBar />
      </div>

      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>
          EDIT
        </button>
        <button className="delete">DELETE</button>
      </div>
      {modal && (
        <Modal
          mode={"edit"}
          setShowModal={setShowModal}
          getData={getData}
          song={song}
        />
      )}
    </li>
  );
};

export default ListItem;
