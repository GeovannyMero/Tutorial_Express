const express = require("express");
const bodyParser = require("body-parser");
const productos = require("../Models/Products");

//call connection
const conn = require("../connection");

//call express
const app = express();



const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("person");
});

app.set("view engine", "pug");
app.set("views", "./DataBase/Views");

app.use(bodyParser.json());
//convert json
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  


app.post("/", function(req, res) {
    console.log(req.body);
    var personInfo = req.body;
    if(!personInfo.name || !personInfo.quantity){
        res.send("Error");
    }else{
        var newProduct = new productos({
            id: personInfo.id,
            name: personInfo.name,
            quantity: personInfo.quantity
        });
console.log(newProduct);
        try {
            newProduct.save(function(err, producto){
                if(err){
                    res.send("Error")
                }else{
                    res.send("OK");
                }
            });
        } catch (error) {
            console.error(error);
        }
        
    }
});
app.listen(port, () => {
    console.log(`Express running on: ${port}`);
});