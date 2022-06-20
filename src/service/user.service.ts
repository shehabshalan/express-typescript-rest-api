import { DocumentDefinition } from "mongoose";
import UserModel, { IUser } from "../models/user.model";

export async function createUser(input: DocumentDefinition<IUser>) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
