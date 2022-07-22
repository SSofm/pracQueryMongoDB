import mongoose from "mongoose";

// mongodb://localhost:27017/soccer-new
const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/soccer-new", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connect to DB successfull !");
    })
    .catch((err) => {
      console.error("Connect to DB failed !", err);
    });
};

export default connect;
