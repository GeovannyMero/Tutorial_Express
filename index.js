var express = require("express"); //importamos a express
var app = express(); //se llama a express

//asignamos una ruta
app.get("/", function (req, res) {
  res.send("Hello word");
});

//ruta con un parametro
app.get("/:name", function (req, res) {
  res.send(`Your name is ${req.params.name}`);
});

//ruta con dos parametros
app.get("/:name/:lastname", function (req, res) {
  res.send(`Your full name is ${req.params.name} ${req.params.lastname}`);
});
//asignamos el puerto
app.listen(3000);
