var mongoose = require("mongoose");

const path = "mongodb://localhost:27017/inventario";
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//conection
mongoose.connect(path, config, (error) => {
    if(!error){
        console.log("Successful connection");
    }else{
        console.error("Error");
    }
})