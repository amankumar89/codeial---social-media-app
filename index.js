const express = require("express");
const app = express();
const port = 8080;

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    // console.log("Erorr !", err);
    console.log(`Error in running the server: ${err}`);
  }

  // console.log("Server is running on Port : ", port);
  console.log(`Server is running on port: ${port}`);
});
