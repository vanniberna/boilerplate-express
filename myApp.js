require('dotenv').config()
let express = require('express');
let app = express();

app.use(function middleware(req, res, next) {
  let string = `${req.method} ${req.path} - ${req.ip}`;
  console.log(string);
  next(); // Move to the next middleware/route
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
