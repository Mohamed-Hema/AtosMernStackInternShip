//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

function getCurrentDay() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  const day = today.toLocaleString("en-US", options);
  return day;
}

// app.get("/", function(req, res) {
//   const day = getCurrentDay();
//   res.render("List", {
//     kindOfDay: day
//   });
// });


app.get("/", function(req, res){
  res.render("home")
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
