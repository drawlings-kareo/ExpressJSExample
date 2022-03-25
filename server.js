const { application } = require("express");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text234: "World" });
});

app.get("/test", (req, res) => {
  console.log("test--------------------------");
  // console.log(req);
  console.log(res);
  res.send("yo");
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
