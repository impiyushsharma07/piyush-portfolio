import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 4173;
const distPath = path.join(__dirname, "dist");

app.use(express.json());

app.use(
  express.static(distPath, {
    maxAge: "1y",
    immutable: true,
    index: false
  })
);

app.get("/api/profile", (_req, res) => {
  res.json({
    name: "Piyush",
    role: "Data Analyst",
    location: "India",
    availability: "Available for analytics projects"
  });
});

app.post("/api/contact", (req, res) => {
  const { name, email, projectType, message } = req.body ?? {};

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({ error: "Please complete all contact form fields." });
  }

  res.status(201).json({
    ok: true,
    message: "Contact request received.",
    submission: { name, email, projectType }
  });
});

app.get("/{*splat}", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Portfolio server running at http://localhost:${port}`);
});
