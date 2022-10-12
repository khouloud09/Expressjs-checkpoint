const express = require("express");
const user = express.Router();
//get user
user.get("/",(req,res)=>{
    const date=new Date();
    const hours=date.getHours();
    const day = date.getDay();
    if(hours>9 && hours<17 && day>0 && day<6){
        res.render("opened");
    }else
    {
        res.render("closed");
    }
});

user.get("/home", (req, res) => {
    res.render("home");
  });
  //
  user.get("/services", (req, res) => {
    res.render("services");
  });
  
  user.get("/contact", (req, res) => {
    res.render("contact");
  });
  
  module.exports = user;