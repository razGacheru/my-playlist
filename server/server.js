const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");

const PORT = process.env.port || 8000;

app.use(cors());

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

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
