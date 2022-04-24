const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    icecream_flavour: {
        type: String,
        required: true
    },
    icecream_quantity: {
        type: String,
        required: true
    },
    icecream_cost: {
        type: Number,
        min: 2,
        max: 30
    }
})
module.exports = mongoose.model("Icecream", icecreamSchema)