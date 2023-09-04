const Modal = () => {
  const mode = "edit";
  const handleChange = (e) => {
    console.log("nana");
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3>
          <button>X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder="Your song goes here"
            name="title"
            value={""}
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
            value={""}
            onChange={handleChange}
          ></input>
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
