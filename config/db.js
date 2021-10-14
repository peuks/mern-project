import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      // "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.iuzir.mongodb.net/mern-project",
      "mongodb+srv://" +
        process.env.DB_USER +
        ":" +
        process.env.DB_USER_PASS +
        "@fiaspora.fyg7j.mongodb.net/test?authSource=admin&replicaSet=atlas-o4cjvi-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
};

export default connectDB;
