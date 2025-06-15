import mongodb from "../../utils/mongodb";

export async function GET() {
  await mongodb.dbConnect();

  return Response.json({
    status: "ok",
    message: "📡 Verbindung erfolgreich",
  });
}
