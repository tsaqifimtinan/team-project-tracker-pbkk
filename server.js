import express from "express";
import jwt from "jsonwebtoken";
import pool from "./src/db.js";

const app = express();
const port = 3000;
const secretKey = "your-secret-key";

app.use(express.json());

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password]
  );

  if (rows.length > 0) {
    const user = rows[0];
    const token = jwt.sign(
      { id: user.id, username: user.username },
      secretKey,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.get("/api/protected", (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).send("Token is required");

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(500).send("Failed to authenticate token");
    res.status(200).send("Access granted");
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
