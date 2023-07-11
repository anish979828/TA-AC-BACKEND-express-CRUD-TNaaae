var express = require("express");
var app = express();
var userRouter = require("./routes/users");


// middleares
app.use(express.urlencoded({extended: false}));
app.use("/users",userRouter);


// view engine
app.set("view engine","ejs");
app.set("views",__dirname + "views");

// listener
app.listen(3000,() => {
    console.log("server is running is on port 3000");
})
