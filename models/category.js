const mongoose = require('../config/db')
var VehicleCategorySchema = mongoose.Schema({
    name: String
})

var VehicleCategory = mongoose.model('vehicle_categories', VehicleCategorySchema)
module.exports = VehicleCategory