import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backend_api",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
};
