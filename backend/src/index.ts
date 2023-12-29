import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";

const connectToDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING as string
    );
    console.log(`Mongo database connected with ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", userRoutes);

app.listen(12000, () => {
  connectToDB();
  console.log(`Server running on localhost:12000`);
});
