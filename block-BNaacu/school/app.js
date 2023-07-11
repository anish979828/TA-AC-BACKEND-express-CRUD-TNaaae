var express = require("express");

var app = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
var studentsRouter = require("./routes/students");
app.use("/students",studentsRouter);

// view engine
app.set("view engine","ejs");
app.set("views", __dirname + "/views");

// routes
app.get("/",(req,res) => {
    res.render("index");
});


// listener
app.listen(3000,() => {
    console.log("server is running is on port 3k")
});

