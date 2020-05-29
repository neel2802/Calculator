//jshint esversion:6

const express = require("express");
const bodyParser= require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));




app.get("/bmicalculator", function(req, res){
    res.sendFile( __dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req, res){

    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);

    var results=(weight)/(height*height);
    res.send("The result is:"+ results);
});




app.listen(3000, function(){
    console.log("3000 port is running");
});