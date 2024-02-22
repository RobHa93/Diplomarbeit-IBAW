import express from "express";
import _ from "lodash";
import machines from "../data/machines.json";
import mongoose from "mongoose";

const DB_URL = `mongodb+srv://robinhasler:IbawServiceTool@cluster0.txr0gzs.mongodb.net/`;
const router = express.Router();

let machinesArray = machines;

mongoose.connect(DB_URL);

const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to mongoDB!");
});

const MachineSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  type: String,
  problemcode: String,
});

const MachineModel = mongoose.model("Machine", MachineSchema);

router.get("/", async (req, res) => {
  try {
    const machines = await MachineModel.find();
    res.json(machines);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const machine = await MachineModel.findById(req.params.id);
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

router.post("/", (req, res) => {
  const id = new mongoose.Types.ObjectId();
  const machineToPersist = Object.assign(
    {
      _id: id,
    },
    req.body
  );
  const machine = new MachineModel(machineToPersist);

  machine.save().then((err, machine) => {
    if (err) res.status(500).send(err);
    res.json(machine);
  });
});

router.put("/:id", async (req, res) => {
  try {
    const machine = await MachineModel.findById(req.params.id);
    if (machine) {
      machine.name = req.body.name;
      machine.type = req.body.type;
      machine.problemcode = req.body.problemcode;
      await machine.save();
      res.json(machine);
    } else {
      res.status(404).send(`Machine ${req.params.id} not found.`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const machine = await MachineModel.findByIdAndDelete(req.params.id);
    if (machine) {
      res.status(200).send(`Machine with id ${req.params.id} was deleted`);
    } else {
      res.status(404).send(`Machine ${req.params.id} not found.`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
