import express from "express";
import morgan from "morgan";
import MachineRoute from "./routes/MachineRoute.js";
import UserRoute from "./routes/userRoute.js";
import bodyParser from "body-parser";
import cors from "cors";

const PORT = 4001;
const server = express();

server.use(cors());
server.use(morgan("tiny"));
server.use(bodyParser.json());

// Benutzer-Routen hinzufügen
server.use("/api/v1/users", UserRoute);

// Maschinen-Routen hinzufügen
server.use("/api/v1/machines", MachineRoute);

// Route-Handler für Testzwecke
server.get(
  "/route-handlers",
  (req, res, next) => {
    res.send("Route handler works!");
    next();
  },
  (req, res, next) => {
    console.log("Second handler!");
    next();
  },
  (req, res) => {
    console.log("Third handler!");
  }
);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
