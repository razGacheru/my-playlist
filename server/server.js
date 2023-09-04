const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const PORT = process.env.port || 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("HELLo");
});

app.get("/playlist/:userEmail", async (req, res) => {
  console.log(req);
  const userEmail = req.params.userEmail;
  try {
    const playlist = await pool.query(
      "SELECT * FROM playlist WHERE user_email = $1",
      [userEmail]
    );
    res.json(playlist.rows);
  } catch (error) {
    console.error(error);
  }
});

app.post("/playlist", async (req, res) => {
  try {
    const { user_email, title, progress, date } = req.body;
    const id = uuidv4();
    const newSong = await pool.query(
      `INSERT INTO playlist(id, user_email, title, progress, date) VALUES ($1, $2, $3, $4, $5)`,
      [id, user_email, title, progress, date]
    );
    res.json(newSong);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
