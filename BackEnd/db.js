const mongoose = require("mongoose");

// const mongoURI = "mongodb://localhost:27017";

// const connectToMongo = () => {
//   mongoose.connect(mongoURI, () => {
//     console.log("connected to Mongo successfully");
//   });
// };

const server = "127.0.0.1:27017";
const database = "inotebook";

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${server}/${database}`);

    console.log("connected to Mongo successfully");
  } catch (err) {
    console.log("failed to connect Mongo", err);
  }
};

module.exports = connectDB;
