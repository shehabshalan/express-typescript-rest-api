import { DocumentDefinition } from "mongoose";
import UserModel, { IUser } from "../models/user.model";

export async function createUser(
  input: DocumentDefinition<
    Omit<IUser, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    const user = await UserModel.findOne({ email: input.email });
    if (user) {
      throw new Error("User already exists");
    }

    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
