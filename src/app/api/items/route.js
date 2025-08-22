import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  const db = dbConnect();
  const data = await db.collection("products").find().toArray();

  // Convert ObjectId to string so it's valid JSON
  const cleanData = data.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return NextResponse.json(cleanData, { status: 200 });
}

export async function POST(req) {
  try {
    const db = dbConnect();
    const postedData = await req.json();

    const result = await db.collection("products").insertOne(postedData);
    revalidatePath("/products");

    return NextResponse.json(
      {
        acknowledged: result.acknowledged,
        insertedId: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
