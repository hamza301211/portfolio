import mongoose from "mongoose"

module.exports.connect = () => {
    mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
      })
      .then(() => {
        console.log("Done: connected to database");
      })
      .catch((err) => {
        console.log(err);
        console.log("connection failed");
      });
  };

