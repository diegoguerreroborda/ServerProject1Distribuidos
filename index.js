const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000 //process.argv[2]
const ofirebase = require('./firebase/setData')
const ogetDataBase = require('./firebase/getData')
const firebase = require("./firebase/firebase_connect");
let cities = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => {
  res.send(`Hello World of my docker Server on ${port}`)
})

app.get("/savedata", function(req,res){
  console.log("guardar")
  ofirebase.saveData(req.body, function(err, data){
   res.send(data)
  })
});

app.get("/userdata", function(req,res){
  console.log("obteniendo todos")
  ogetDataBase._getData(function(data){
    readData(data)
   res.send({"status":200,"statuscode":1,"result":data})
  })
});

function readData(data){
  var myjson = JSON.stringify(data)
  console.log(data.length)
  
  for(let i=1; i<data.length; i++){
    countcities(data[i].city)
  }
  console.log(cities);
}

function countcities(cityforcount){
  let exist = false;
  for(let i=0; i<cities.length; i++){
    if(cities[i].city == cityforcount){
      cities[i].count = cities[i].count + 1;
      exist = true
    }
  }
  if(!exist){
    cities.push({city: cityforcount, count: 1})
  }
  
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})