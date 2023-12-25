const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()


mongoose.connect("mongodb+srv://reejithremanan:Zr9tbC0efC5lKjI1@movie-cluster.mm5nqu6.mongodb.net/"
).then( () => app.listen(3000, () => {
    console.log("connected to the server + port")
})
).catch(e => console.log(e))






