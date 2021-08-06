import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import "./node_modules/dotenv/config.js";
// import userRoute from "./routes/user.route.js";
// import auth from "./middleware/auth.js";
const app = express();
const PORT = 5000;
//Middleware
app.use(express.json());
app.use(cors());

import MONGODB_URI from "./config.js";
import userRoute from "./routes/user.route.js";
import ambulanceRoute from "./routes/ambulances.route.js";
import paymentRoute from "./routes/payment.route.js";
// import auth from  './middleware/auth';
// const MONGODB_URI = "mongodb://127.0.0.1/E-Vac";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});



app.use("/", ambulanceRoute);
app.use("/", userRoute);
app.use("/", paymentRoute);

app.listen(PORT, () => {
  console.log(`Server is working on ${PORT}`);
});