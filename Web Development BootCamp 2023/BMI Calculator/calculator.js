//Require express in your calculator.js
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));



//Create a root route get method with app.get()
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req, res){

    //convert text to number with "+" or Number(String)

    var num1 = +req.body.n1;
    var num2 = +req.body.n2;

    var result = num1 + num2;

    res.send("The result of the calculation is "+ result);
})

//Spin up our server on port 3000 with app.listen
  app.listen(port, () => {
    console.log(`\Server is running on server ${port}`)
  })

