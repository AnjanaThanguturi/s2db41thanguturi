const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
icecream_flavour: String,
icecream_quantity: String,
icecream_cost: {
    type: Number,
    min: 2,
    max: 30
  } 
})
module.exports = mongoose.model("Icecream",icecreamSchema)