import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) {
    console.log("✅ DB Verbindung aktiv");
    return cached.conn;
  }

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("❌ MONGODB_URI fehlt in der .env");

    const options = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(uri, options).then((mongooseInstance) => {
      console.log("🚀 Neue DB-Verbindung aufgebaut");
      return mongooseInstance;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

async function dbDisconnect(){
    await mongoose.disconnect();
    console.log("DB Verbindung beendet")
}

const mongodb = {dbConnect, dbDisconnect}
export default mongodb