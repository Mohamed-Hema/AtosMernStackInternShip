//Require express in your calculator.js
const express = require('express')
const app = express();
const port = 3000;

//Create a root route get method with app.get()
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
  })

//Spin up our server on port 3000 with app.listen
  app.listen(port, () => {
    console.log(`\Server is running on server ${port}`)
  })

