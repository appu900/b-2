const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const adminRouter = require("./routes/adminRouter");

app.use(cors());

connectToDatabase().catch((error) => console.log(error));
async function connectToDatabase() {
  await mongoose.connect(
    "mongodb+srv://Appu:Jarvis7735@cluster0.u7qvflf.mongodb.net/"
  );
  console.log("database is connected");
}

app.use(express.json());
app.use(adminRouter);
app.use("/uploads", express.static("uploads"));

app.get("/", (request, response) => {
  response.send("good one");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`app is running on port number ${port}`);
});
