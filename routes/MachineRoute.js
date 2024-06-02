import express from "express";
import mongoose from "mongoose";
import {
  // Import der Funktionen von function.js
  findMachineByNumber,
  getAllMachines,
  getMachineById,
  createMachine,
  updateMachineById,
  deleteMachineById,
} from "../service/functions.js";

require("dotenv").config();

const DB_URL = process.env.DB_URL;
const router = express.Router();

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to mongoDB!");
});

// Route zum Suchen einer Maschine anhand der Nummer
router.get("/search/:number", async (req, res) => {
  const number = req.params.number;

  try {
    const machine = await findMachineByNumber(number);
    // Senden der gefundenen Maschine als JSON
    if (machine) {
      res.json(machine);
    } else {
      // 404-Fehler, wenn die Maschine nicht gefunden wird
      res.status(404).send(`Machine with number ${number} not found.`);
    }
  } catch (error) {
    console.error(error);
    // 500-Fehler bei Serverfehlern
    res.status(500).send("Server Error");
  }
});

// Route zum Abrufen aller Maschinen
router.get("/", async (req, res) => {
  try {
    const machines = await getAllMachines();
    res.json(machines);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Route zum Abrufen einer Maschine anhand der ID
router.get("/:id", async (req, res) => {
  try {
    const machine = await getMachineById(req.params.id);
    if (machine) {
      res.json(machine);
    } else {
      res.status(404).send(`Machine ${req.params.id} not found.`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Route zum Erstellen einer neuen Maschine
router.post("/", async (req, res) => {
  try {
    const machine = await createMachine(req.body);
    res.json(machine);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Route zum Aktualisieren einer Maschine anhand der ID
router.put("/:id", async (req, res) => {
  try {
    const machine = await updateMachineById(req.params.id, req.body);
    res.json(machine);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Route zum Löschen einer Maschine anhand der ID
router.delete("/:id", async (req, res) => {
  try {
    const message = await deleteMachineById(req.params.id);
    res.status(200).send(message);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
