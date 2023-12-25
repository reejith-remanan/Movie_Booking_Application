const mongoose = require('mongoose')
const MovieSchema = new mongoose.Schema({
    tile : {
        type : 'string',
        required : true
    },
    description : {
        type : 'string',
        required : true
    },
    actors : [{
        type : 'string',
        required : true
    }],
    releaseDate : {
        type : Date,
        required : true
    },
    posterUrl : {
        type : String,
        required : true
    },
    admin : {
        type : mongoose.Types.ObjectId,
        ref : 'admin',
        required : true
    }
})
const movie = mongoose.model('Movie', MovieSchema)
module.exports = movie;
 