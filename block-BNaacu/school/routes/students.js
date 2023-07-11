var express = require("express");
const router = express.Router();


router.get("/new",(req,res) => {
    res.render("studentsForm")
});

router.post("/",(req,res) => {
    res.send(req.body);
});

router.get("/",(req,res) => {
    res.render("students",{list:["ankit","honey","ruchi","anish","shastri"]});
});

router.get("/:id",(req,res) => {
    res.render("studentDetail",{student:{
        name:"anish",
        email:"girianish2004@gmail.com"
    }})
}
);

module.exports = router;