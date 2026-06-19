import express from "express";
import bcrypt from "bcrypt";
import { pool } from "../db.js";
import { signToken } from "../authMiddleware.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);

    const [[row]] = await pool.query(
      "SELECT COALESCE(MAX(id), 0) + 1 AS nextId FROM users",
    );
    const nextId = row.nextId;

    const [result] = await pool.query(
      "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)",
      [nextId, name, email, hash],
    );

    res.status(201).json({ token: signToken(nextId) });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [[user]] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({ token: signToken(user.id) });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

export default router;
