// Importieren des mongoose-Moduls für die Verbindung zur MongoDB
import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", () => {
  // Ausgabe einer Bestätigungsmeldung, wenn die Verbindung erfolgreich hergestellt wurde
  console.log("Connected to MongoDB!");
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
