import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;

  const singleData = await dbConnect("products").findOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
}

export async function PATCH(req, { params }) {
  const p = await params;
  const updateDate = await req.json();
  const filter = { _id: new ObjectId(p.id) };

  const updatedRes = await dbConnect("products").updateOne(
    filter,
    { $set: { ...updateDate } },
    {
      upsert: true,
    }
  );

  return Response.json(updatedRes);
}

export async function DELETE(req, { params }) {
  const p = await params;

  const deleteRes = await dbConnect("products").deleteOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(deleteRes);
}
