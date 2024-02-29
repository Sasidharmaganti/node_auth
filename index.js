const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/user',authRouter);

const DB =
  "mongodb+srv://sasidhar:S%40s!dhar4463@cluster0.44frqsi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection = Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
