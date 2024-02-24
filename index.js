import express from "express";
import bodyParser from "body-parser";
import axios from "axios";



const app=express();
const port=3000;
// Gecode


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))


// TORONTO
app.get("/",async (req,res)=>{
  
  try{
    // const locationGeo=await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=windsor,CA,124&limit=3&appid=${apiKey}`)
    // let city=locationGeo.data[0];
    // let lat=(Math.round(city.lat*100)/100).toFixed(2);
    // let lon=(Math.round(city.lon*100)/100).toFixed(2);
    // console.log(lat)
    // console.log(lon)
    const weatherReport=await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=43.70&longitude=-79.41&hourly=temperature_2m,rain,showers,snowfall,cloud_cover&forecast_days=1`);
    let tempReport=weatherReport.data.hourly.temperature_2m;
    let rainReport=weatherReport.data.hourly.rain;

    let dailyReport=weatherReport.data.hourly;
    let dailyReportTime=dailyReport.time;
    let dailyReportTemp=dailyReport.temperature_2m;




    // console.log(tempReport);
    var largest = tempReport[0];
    var smallest= tempReport[0];

    var rain=rainReport[0];
    

    // Temperature
    for (var i = 0; i < tempReport.length; i++) {
        if (tempReport[i] > largest ) {
          largest = tempReport[i];
        }
      }
      for (var j = 0; j < tempReport.length; j++) {
        if (tempReport[j] < smallest ) {
          smallest = tempReport[j];
        }
      }
      // RAIN
      for (var k = 0; k < rainReport.length; k++) {
        if (rainReport[i] > rain ) {
          rain = rainReport[i];
        }
      }


// Cloud
// console.log(weatherReport.data.hourly_units)

let cloudCover=weatherReport.data.hourly.cloud_cover
let clouds=cloudCover[0]
for(let l=0;l<cloudCover.length;l++){
  if(cloudCover[l]>clouds){
    clouds=cloudCover[i];
  }
}



let skyStatus
if(clouds>75){
  skyStatus="Cloudy"
}else if(clouds>50 && clouds<=75){
  skyStatus=`Mildly cloudy`
}else if(clouds>=15 && clouds<=50){
  skyStatus=`Partly cloudy`
}else{
  skyStatus=`Sunny`
}


// Snow
let snowReport=weatherReport.data.hourly.snowfall;
let snow=snowReport[0];

for (var m = 0; m < snowReport.length; m++) {
  if (snowReport[m] > snow ) {
    snow = snowReport[m];
  }
}

  res.render("index.ejs",{highTemp:largest,
  lowestTemp:smallest,
  percentageOfRain:rain,
  percentageOfCloud:clouds,
  statusOfSky:skyStatus,
  statusOfSnow:snow,
  time:dailyReportTime,
  temperature:dailyReportTemp})


}catch(err){
    console.log(err);
}
})



// chennai
app.get("/chennai",async (req,res)=>{
  
  try{
    const weatherReport=await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&hourly=temperature_2m,rain,showers,snowfall,cloud_cover&forecast_days=1`);
    let tempReport=weatherReport.data.hourly.temperature_2m;
    let rainReport=weatherReport.data.hourly.rain;

    let dailyReport=weatherReport.data.hourly;
    let dailyReportTime=dailyReport.time;
    let dailyReportTemp=dailyReport.temperature_2m;




    // console.log(tempReport);
    var largest = tempReport[0];
    var smallest= tempReport[0];

    var rain=rainReport[0];
    

    // Temperature
    for (var i = 0; i < tempReport.length; i++) {
        if (tempReport[i] > largest ) {
          largest = tempReport[i];
        }
      }
      for (var j = 0; j < tempReport.length; j++) {
        if (tempReport[j] < smallest ) {
          smallest = tempReport[j];
        }
      }
      // RAIN
      for (var k = 0; k < rainReport.length; k++) {
        if (rainReport[i] > rain ) {
          rain = rainReport[i];
        }
      }


// Cloud
// console.log(weatherReport.data.hourly_units)

let cloudCover=weatherReport.data.hourly.cloud_cover
let clouds=cloudCover[0]
for(let l=0;l<cloudCover.length;l++){
  if(cloudCover[l]>clouds){
    clouds=cloudCover[i];
  }
}



let skyStatus
if(clouds>75){
  skyStatus="Cloudy"
}else if(clouds>50 && clouds<=75){
  skyStatus=`Mildly cloudy`
}else if(clouds>=15 && clouds<=50){
  skyStatus=`Partly cloudy`
}else{
  skyStatus=`Sunny`
}


// Snow
let snowReport=weatherReport.data.hourly.snowfall;
let snow=snowReport[0];

for (var m = 0; m < snowReport.length; m++) {
  if (snowReport[m] > snow ) {
    snow = snowReport[m];
  }
}

  res.render("chennai.ejs",{highTemp:largest,
  lowestTemp:smallest,
  percentageOfRain:rain,
  percentageOfCloud:clouds,
  statusOfSky:skyStatus,
  statusOfSnow:snow,
  time:dailyReportTime,
  temperature:dailyReportTemp})


}catch(err){
    console.log(err);
}
})


// GERMANY
app.get("/germany",async (req,res)=>{
  
  try{
    const weatherReport=await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=49.68&longitude=10.53&hourly=temperature_2m,rain,showers,snowfall,cloud_cover&forecast_days=1`);
    let tempReport=weatherReport.data.hourly.temperature_2m;
    let rainReport=weatherReport.data.hourly.rain;

    let dailyReport=weatherReport.data.hourly;
    let dailyReportTime=dailyReport.time;
    let dailyReportTemp=dailyReport.temperature_2m;




    // console.log(tempReport);
    var largest = tempReport[0];
    var smallest= tempReport[0];

    var rain=rainReport[0];
    

    // Temperature
    for (var i = 0; i < tempReport.length; i++) {
        if (tempReport[i] > largest ) {
          largest = tempReport[i];
        }
      }
      for (var j = 0; j < tempReport.length; j++) {
        if (tempReport[j] < smallest ) {
          smallest = tempReport[j];
        }
      }
      // RAIN
      for (var k = 0; k < rainReport.length; k++) {
        if (rainReport[i] > rain ) {
          rain = rainReport[i];
        }
      }


// Cloud
// console.log(weatherReport.data.hourly_units)

let cloudCover=weatherReport.data.hourly.cloud_cover
let clouds=cloudCover[0]
for(let l=0;l<cloudCover.length;l++){
  if(cloudCover[l]>clouds){
    clouds=cloudCover[i];
  }
}



let skyStatus
if(clouds>75){
  skyStatus="Cloudy"
}else if(clouds>50 && clouds<=75){
  skyStatus=`Mildly cloudy`
}else if(clouds>=15 && clouds<=50){
  skyStatus=`Partly cloudy`
}else{
  skyStatus=`Sunny`
}


// Snow
let snowReport=weatherReport.data.hourly.snowfall;
let snow=snowReport[0];

for (var m = 0; m < snowReport.length; m++) {
  if (snowReport[m] > snow ) {
    snow = snowReport[m];
  }
}

  res.render("germany.ejs",{highTemp:largest,
  lowestTemp:smallest,
  percentageOfRain:rain,
  percentageOfCloud:clouds,
  statusOfSky:skyStatus,
  statusOfSnow:snow,
  time:dailyReportTime,
  temperature:dailyReportTemp})


}catch(err){
    console.log(err);
}
})






// Server port
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})