const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
require("dotenv").config();

app.use(express.json());
app.use("/api/v1/tasks", tasks);    // we have to write  app.use(express.json()) before the declaration of router
const port = process.env.PORT || 5000;

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};
start();


