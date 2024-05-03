import mongoose from "mongoose";

const MachineSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  number: String,
  description: String,
});

const MachineModel = mongoose.model("Machine", MachineSchema);

export async function getAllMachines() {
  try {
    const machines = await MachineModel.find();
    return machines;
  } catch (err) {
    throw err;
  }
}

export async function getMachineById(id) {
  try {
    const machine = await MachineModel.findById(id);
    return machine;
  } catch (err) {
    throw err;
  }
}

export async function createMachine(machineData) {
  try {
    const id = new mongoose.Types.ObjectId();
    const machineToPersist = Object.assign({ _id: id }, machineData);
    const machine = new MachineModel(machineToPersist);
    await machine.save();
    return machine;
  } catch (err) {
    throw err;
  }
}

export async function updateMachineById(id, newData) {
  try {
    const machine = await MachineModel.findById(id);
    if (machine) {
      machine.name = newData.name;
      machine.type = newData.type;
      machine.problemcode = newData.problemcode;
      await machine.save();
      return machine;
    } else {
      throw new Error(`Machine ${id} not found.`);
    }
  } catch (err) {
    throw err;
  }
}

export async function deleteMachineById(id) {
  try {
    const machine = await MachineModel.findByIdAndDelete(id);
    if (machine) {
      return `Machine with id ${id} was deleted`;
    } else {
      throw new Error(`Machine ${id} not found.`);
    }
  } catch (err) {
    throw err;
  }
}
