const route = require("express").Router()
const Vehicle =  require("../models/vehicle")
const VehicleCategory =  require("../models/category")
const res = require("express/lib/response")
const multer = require("multer")
const fs = require("fs")

var options = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, './uploads');
      } ,
        filename: function (req, file, cb) {
          cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
        }
})


var upload = multer({ storage: options });

route.get("/add_vehicle", (req,res) => {
    VehicleCategory.find(function (err, category) {
        if (err) return console.error(err);
      res.render("add",{category: category});
  })
})

route.post("/add", upload.single('picture'),(req,res) => {
    var vehicle = new Vehicle({
        brand: req.body.brand,
        category: req.body.category,
        picture: req.file.filename,
        price: req.body.price,
        depreciation: req.body.depreciation,
        years: req.body.years,
        total: req.body.total
    })
    vehicle.save((err,user) => {
        if (err) return console.error(err);
        id=vehicle._id;
        console.log(vehicle._id + " saved to user collection.");	      
        res.redirect("/vehicle/list");
    })
})

route.get("/list",(req,res)=>{
	Vehicle.find(function (err, vehicle) {
  		if (err) return console.error(err);
    	res.render("list",{vehicle:vehicle});
	})
})

module.exports = route