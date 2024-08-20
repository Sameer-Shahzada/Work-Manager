import mongoose from "mongoose";
import { User } from "@/models/user";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.Mongo_DB_URL, {
      dbName: "work_manager",
    });
    console.log("DB connected...");
    console.log(connection);    // connection is an object

    // testing & creating new user
    const user = new User({
      name:'Jhon Doe',
      email:'jhon@gmail.com',
      password:'jhoncena',
      about:'testing going on...'
    })
    await user.save();

    console.log('user is created')
  } catch (error) {
    console.log("failed to connect with database");
    console.log(error);
  }
};
