const mongoose = require('../config/db')
var VehicleSchema = mongoose.Schema({
    brand: String,
    category: String,
    picture: String,
    price: Number,
    depreciation: Number,
    years: Number,
    total: Number
})

var Vehicle = mongoose.model('vehicle', VehicleSchema)
module.exports = Vehicle