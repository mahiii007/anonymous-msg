import mongoose from "mongoose";

type connectionObj = { isConnected?: number };

const connection: connectionObj = {};

const connectToDb = async () => {
  if (connection.isConnected) {
    console.log("Already connected to DB.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI as string, {});
    connection.isConnected = db.connections[0].readyState;

    console.log("DB connected successfully.");
  } catch (error) {
    console.log("DB connection failed", error);
    process.exit(1);
  }
};

export default connectToDb;
