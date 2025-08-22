"use server";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  const { email, password } = payload;
  const db = dbConnect(collectionNameObj.UserCollections);

  const user = db.findOne({ email: email });
  if (!user) return null;
  const isPasswordOk = bcrypt.compare(user.password, password);
  if (!isPasswordOk) return null;

  return user;
};
