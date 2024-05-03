import express from "express";
import morgan from "morgan";
import MachineRoute from "./routes/MachineRoute";
//import machines from "./data/machines.json";
import _ from "lodash";
import bodyParser from "body-parser";
import path from "path";

const PORT = 4000;
const buildUrl = (version, path) => `/api/${version}/${path}`;
const MACHINES_BASE_URL = buildUrl("v1", "machines");

const server = express();

server.use(morgan("tiny"));
server.use(bodyParser.json());
server.use(express.static("public"));

server.use(MACHINES_BASE_URL, MachineRoute);

server.get("/download/images/:imageName", (req, res) => {
  res.download(path.join("public", "images", req.params.imageName));
});
server.get(
  "/route-handlers",
  (req, res, next) => {
    res.send("routhandler works!");
    next();
  },
  (req, res, next) => {
    console.log("second handler!");
    next();
  },
  (req, res) => {
    console.log("third handler!");
  }
);

server.listen(4000, () => {
  console.log(`server started on port ${PORT}`);
});
