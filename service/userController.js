// Funktion für den Loginvorgang

import UserModel from "./userModel.js";

// Funktion zum Abrufen aller Benutzer aus der Datenbank
export const getAllUsers = async () => {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    throw new Error("Error retrieving users from the database");
  }
};
