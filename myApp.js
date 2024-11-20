require('dotenv').config()
let express = require('express');
let app = express();


app.get(function middleware(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string)
  next()
}); 



/*
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE==="uppercase") {
    res.json({
      message: "Hello json".toUpperCase()
    });
  } else {
    res.json({
      message: "Hello json"
    });
  }
}); */



/*
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
}); 

app.use("/public", express.static(__dirname + "/public")); */

/*
app.get('/', function(req, res) {
    res.send('Hello Express');
  }); */



































 module.exports = app;
