import express from "express";
import UserModel from "../service/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

require("dotenv").config();

const router = express.Router();

// Route für den Benutzer-Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Benutzer in der Datenbank suchen
    const user = await UserModel.findOne({ username });

    // Benutzer nicht gefunden
    if (!user) {
      return res.status(401).json({ message: "Benutzer nicht gefunden" });
    }

    // Passwort überprüfen
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: "Ungültige Anmeldeinformationen" });
    }

    // JWT-Token erstellen
    const payload = { username: user.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    // Token an das Frontend senden
    res.status(200).json({ token });
  } catch (error) {
    console.error("Fehler beim Anmelden des Benutzers:", error);
    res.status(500).json({ message: "Interner Serverfehler" });
  }
});

// Route zum Abrufen aller Benutzer
router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Fehler beim Abrufen der Benutzer:", error);
    res.status(500).json({ message: "Interner Serverfehler" });
  }
});

export default router;
