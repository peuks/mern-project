import mongoose from "mongoose";

const connectDB = () => {
  mongoose
  .connect(
    // "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.iuzir.mongodb.net/mern-project",
     'mongodb+srv://peuks:RX1yy9BBGO3JGrJj@fiaspora.fyg7j.mongodb.net/test?authSource=admin&replicaSet=atlas-o4cjvi-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',

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