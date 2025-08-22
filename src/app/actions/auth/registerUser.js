"use server";

import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const UserCollections = dbConnect(collectionNameObj.UserCollections);

  // validation user exist or not
  const { email, password } = payload;
  if (!email || !password) return { success: false };
  const user = await UserCollections.findOne({ email: email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await UserCollections.insertOne(payload);
    const { acknowledged, insertedId } = result;
    return { acknowledged, insertedId };
  }
  return { success: false };
};
