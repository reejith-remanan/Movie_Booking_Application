const mongoose = require('mongoose')
const MovieSchema = new mongoose.Schema({
    movie : {
        type : mongoose.Types.ObjectId,
        ref : "Movies",
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    seatNumber : {
        type : Number,
        required : true
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref : "user",
        required : true
    }
    
})
const Booking = mongoose.model('Movie', MovieSchema)
module.exports = Booking;

