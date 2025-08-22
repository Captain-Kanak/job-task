import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  const data = await dbConnect(collectionNameObj.PRODUCTS_COLLECTIONS)
    .find()
    .toArray();

  // Convert ObjectId to string so it's valid JSON
  const cleanData = data.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return Response.json(cleanData, { status: 200 });
}

export async function POST(req) {
  try {
    const postedData = await req.json();

    const result = await dbConnect(
      collectionNameObj.PRODUCTS_COLLECTIONS
    ).insertOne(postedData);
    revalidatePath("/products");

    return Response.json(
      {
        acknowledged: result.acknowledged,
        insertedId: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
