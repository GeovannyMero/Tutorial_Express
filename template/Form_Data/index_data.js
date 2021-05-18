var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var app = express();

app.get("/", function (res, res) {
  res.render("form");
});

app.set("view engine", "pug");
app.set("views", "./template/Form_Data");

//for parsing application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());

app.post("/", function (req, res) {
  console.log(req.body);
  res.send("recivido");
});


app.listen(3000);