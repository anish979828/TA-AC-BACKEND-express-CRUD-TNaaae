var express = require("express");
var app = express();

// middlewares
app.use(express.json());

console.log(__dirname + "/views");

// view engines
app.set("view engine","ejs");

app.set(__dirname + "views");

// routes
app.get("/",(req,res) => {
    const user = {name:"anish",age:20}
    res.render("index",{user:user})
});


// listeners
app.listen(3000,() => {
    console.log("server is running on port 3k")
});