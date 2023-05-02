import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";
import morgan from "morgan";
import categoryRoute from "./routes/categoryRoute.js"

dotenv.config();

const app = express();

// db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB ERROR => ", err));

// morgan middleware
app.use(morgan("dev"));
app.use(express.json());

// router middleware
app.use("/api", authRoute);
app.use("/api", categoryRoute);

const port = process.env.PORT || 8000;
//
app.listen(8000, () => {
  console.log(`Server is listen at port ${port}`);
});
