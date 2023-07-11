var express = require("express");
var router = express.Router();

router.get("/new",(req,res) => {
    res.render("usersForm");
});

router.get("/:id",(req,res) => {
    res.render("userDetail",{user:{name:"anish",email:"girianish2004@gmail.com"}})
});

router.get("/",(req,res) => {
    res.render("users",{users:["anish","ruchi","avsk","honey",'shastri']});
});

router.put("/:id/edit",(req,res) => {
    // edit form 
});

router.delete("/:id",(req,res) => {
    // delete form 
});

