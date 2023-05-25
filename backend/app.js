require("dotenv").config();
const express = require("express");
const cors = require("cors");
const participantsRouter = require("./routes/participants");

const app = express();

app.use(cors());
app.use(express.json());
app.use(participantsRouter);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
