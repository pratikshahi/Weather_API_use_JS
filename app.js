//jshint esversion:6

const express =require("express");
const https=require("https");           //https inbuilt node module required to acess api 

const app=express();
    app.get("/",function(req,res){
        //usr to api got from postman
        const url="https://api.openweathermap.org/data/2.5/weather?q=london&appid=f5f9e1d171638cdd0a6d7897e7aa3b6e&units=metric";
        https.get(url,function(response){
            console
        })
        res.send("sever is up and running");
    });














app.listen(3000,function(){
    console.log("server running on port 3000");
});