const mongoose = require("mongoose");
const db =
  "mongodb+srv://wasiasiddiquei:waFVEEX4SEiFcQ0O@cluster0.elscouf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected..");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
