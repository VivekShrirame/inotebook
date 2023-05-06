const connectToMongo = require("./db");
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

mongoose.set("strictQuery", true);

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNoteBook Backend listening at http://localhost:${port}`);
});
