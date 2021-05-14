var express = require("express"); //importamos a express
var app = express(); //se llama a express

//asignamos una ruta
app.get("/", function(req, res){
    res.send("Hello word");
});

//asignamos el puerto
app.listen(3000);



