import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.Mongo_DB_URL, {
      dbName: "work_manager",
    });
    console.log("DB connected...");
    console.log(connection);    // connection is an object
  } catch (error) {
    console.log("failed to connect with database");
    console.log(error);
  }
};
