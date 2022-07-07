import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://chanhwi:passwordlch@closet.aex1xhf.mongodb.net/closet?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

const handleError = (error) => console.log("DB Error", error);
const handleOpen = () => console.log("✅ Connected to DB");

db.on("error", handleError);
db.once("open", handleOpen);
