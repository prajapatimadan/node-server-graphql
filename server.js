const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const studentRoute = require("./src/modules/student/router");
const port = process.env.PORT || 4000;
const app = express();
app.use(cors(), bodyParser.json());
app.use(
  "/studentgql",
  studentRoute.router
);
app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.listen(port, () => console.info(`Server started on port ${port}`));
