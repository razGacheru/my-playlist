import { useState } from "react";

const Modal = ({ mode, setShowModal, getData, song }) => {
  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: editMode ? song.user_email : "rj@gg.com",
    title: editMode ? song.title : null,
    progress: editMode ? song.progress : 50,
    date: editMode ? "" : new Date(),
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/playlist/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        console.log("worked");
        setShowModal(false);
        getData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your song</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder="Your song goes here"
            name="title"
            value={data.title}
            onChange={handleChange}
          ></input>
          <br />
          <label for="range">Drag to select your current progress</label>
          <input
            id="range"
            required
            type="range"
            min="0"
            max="100"
            placeholder="Your song goes here"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          ></input>
          <input
            className={mode}
            type="submit"
            onClick={editMode ? "" : postData}
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
