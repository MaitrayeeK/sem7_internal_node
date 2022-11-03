require('dotenv').config()
const express = require("express")
const app = express()
const VehicleRouter = require("./routers/vehicle_router")
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('uploads'))

app.use("/vehicle",VehicleRouter)

app.listen(8080, (err,res) => {
    if(err) console.log("Server not connected")

    console.log("Server is listening on 8080.")
})