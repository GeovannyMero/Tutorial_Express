var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", './template');

app.get("/first_template/:name", function(req, res){
    res.render("first_view",{
        name: req.params.name
    });
});

app.listen(3000);