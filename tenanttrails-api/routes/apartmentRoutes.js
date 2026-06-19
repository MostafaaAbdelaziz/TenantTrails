import express from "express";
import { pool } from "../db.js";
import { auth } from "../authMiddleware.js";
import multer from "multer";
import cloudinary from "../cloudinary.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", async (req, res) => {
  const [rows] = await pool.query(`
    SELECT 
      a.*,
      ROUND(AVG(r.rating), 1) AS rating,
      COUNT(r.id)            AS reviews
    FROM apartments a
    LEFT JOIN reviews r ON r.apt_id = a.id
    GROUP BY a.id
  `);
  res.json(rows);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const [[apartment]] = await pool.query(
    "SELECT * FROM apartments WHERE id = ?",
    [id],
  );
  if (!apartment) return res.status(404).json({ error: "Apartment not found" });
  res.json(apartment);
});

router.get("/:id/reviews", async (req, res) => {
  const { id } = req.params;
  const [reviews] = await pool.query(
    "SELECT * FROM reviews WHERE apt_id = ? ORDER BY created DESC",
    [id],
  );
  res.json(reviews);
});

router.post("/:id/reviews", auth, async (req, res) => {
  const { id } = req.params;
  const { rating, body } = req.body;
  const userId = req.user.id;

  const [[row]] = await pool.query(
    "SELECT COALESCE(MAX(id), 0) + 1 AS nextId FROM reviews",
  );
  const nextId = row.nextId;

  await pool.query(
    "INSERT INTO reviews (id, apt_id, user_id, rating, body, created) VALUES (?, ?, ?, ?, ?, CURDATE())",
    [nextId, id, userId, rating, body],
  );

  res.status(201).json({ id: nextId });
});

router.post("/upload", auth, upload.single("image"), async (req, res) => {
  try {
    const result = await new Promise((ok, no) =>
      cloudinary.uploader
        .upload_stream({ folder: "tenanttrails" }, (e, r) =>
          e ? no(e) : ok(r),
        )
        .end(req.file.buffer),
    );

    res.json({ url: result.secure_url });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
