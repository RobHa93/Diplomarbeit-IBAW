import express from "express";
import _ from "lodash";
import machines from "../data/machines.json";
import mongoose from "mongoose";
import {
  getAllMachines,
  getMachineById,
  createMachine,
  updateMachineById,
  deleteMachineById,
} from "../service/functions.js";

require("dotenv").config();

const DB_URL = process.env.DB_URL;
const router = express.Router();

let machinesArray = machines;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to mongoDB!");
});

router.get("/", async (req, res) => {
  try {
    const machines = await getAllMachines();
    res.json(machines);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

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

router.post("/", async (req, res) => {
  try {
    const machine = await createMachine(req.body);
    res.json(machine);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const machine = await updateMachineById(req.params.id, req.body);
    res.json(machine);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

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
