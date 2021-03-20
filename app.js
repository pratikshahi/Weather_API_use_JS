//jshint esversion:6

const express = require("express");
const https = require("https");           //https inbuilt node module required to acess api 

const app = express();
app.get("/", function (req, res) {
    //url to api got from postman
    const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=f5f9e1d171638cdd0a6d7897e7aa3b6e&units=metric";
    //https.get to get response from api server
    https.get(url, function (response) {
        console.log(response.statusCode);
        // on getting response from api server
        response.on("data", function (data) {

            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.main.temp;      //traverse through tree to get specific data
            const desc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //console.log(temp);
            //console.log(desc);
            res.write(" <p>weather description is " + desc + "</p>");
            res.write("<h1>the tempreatur in London is " + temp + " degree celcius</h1>");
            res.write("<img src=" + iconUrl + ">");
            //res.send("<h1>the tempreatur in London is "+temp+" degree celcius</h1>");  //single send line 
            res.send();

        });
    });

});



app.listen(3000, function () {
    console.log("server running on port 3000");
});