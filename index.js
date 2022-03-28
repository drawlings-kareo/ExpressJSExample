// const { application } = require("express");
const express = require("express");
const app = express();

let teams = [
  { id: 1, name: "Jayhawks" },
  { id: 4, name: "Friars" },
];

app.use(globalMiddleware);

app.get("/", middleware, (req, res) => {
  res.send("welcome");
});

app.get("/teams", (req, res) => {
  res.send(teams);
});

app.get("/teams/:id", (req, res) => {
  res.json(teams.find((team) => team.id === parseInt(req.params.id)));
});

app.post("/teams/:id/:name", (req, res) => {
  const params = req.params;
  const team = { id: parseInt(params.id), name: params.name };
  teams.push(team);
  res.send("team added, id: " + team.id + ", name:" + team.name);
});

function middleware(req, res, next) {
  console.log("middleware", req.originalUrl);
  next();
}

function globalMiddleware(req, res, next) {
  console.log("globalMiddleware", req.originalUrl);
  next();
}

app.listen(3000);

/*app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text234: "World" });
});*/

/*const userRouter = require("./routes/users");

app.use("/users", userRouter);*/
