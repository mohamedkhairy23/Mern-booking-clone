import express, { Request, Response } from "express";
import colors from "colors";
colors.enable();
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";

const connectToDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING as string
    );
    console.log(
      `Mongo database connected with ${connect.connection.host}`.cyan.underline
        .bold
    );
  } catch (error) {
    console.log(error);
  }
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(12000, () => {
  connectToDB();
  console.log(`Server running on localhost:12000`.yellow.underline.bold);
});
