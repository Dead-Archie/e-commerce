import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((res) => {
      console.log("DB connection established");
    })
    .catch((err) => {
      console.log("Error =================> ");
      console.log(err);
      process.exit(1);
    });
};

export default dbConnect; 