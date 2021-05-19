const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductoSchema = schema({
    id: Number,
    name: String,
    quantity: Number
});

module.exports = mongoose.model("productos", ProductoSchema);
