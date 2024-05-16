// userController.js
import UserModel from "./userModel.js";

export const getAllUsers = async () => {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    throw new Error("Error retrieving users from the database");
  }
};
