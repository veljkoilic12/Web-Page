//jshint esversion: 6

const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/vodeni-sportovi", function(req, res) {
  res.sendFile(__dirname + "/vodeni-sportovi.html");
});

app.get("/atv", function(req, res){
  res.sendFile(__dirname + "/atv-quad-ture.html");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Started server");
});
