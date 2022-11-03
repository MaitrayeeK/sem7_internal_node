const mongoose = require("mongoose")
mongoose.connect(process.env.DBURL)
var db = mongoose.connection;
db.on('error', console.error.bind("Error in connection"))
module.exports = mongoose