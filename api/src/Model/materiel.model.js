const mongoose = require('mongoose')
const {Schema} = mongoose

const  materielSchema = Schema(
    {
        design:{
            type: String
        },
        etat:{
            type: String
        },
        quatity:{
            type: Number,
        }
    },{
        timeistamp: true
    }
)

module.exports = mongoose.model('materiel', materielSchema)