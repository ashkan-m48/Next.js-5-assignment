import data from "./users.json";
import { v4 as uuid } from "uuid";

export async function GET() {
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  data.push({ ...body, id: uuid() });

  return Response.json(data);
}
