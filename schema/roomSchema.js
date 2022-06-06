const mongoose = require('mongoose');
const roomSchema = mongoose.Schema({
    city: {
        require: true,
        type: String
    },
    price: {
        require: true,
        type: Number
    },
    roomType: {
        require: true,
        type: String
    },
    desc: {
        require: true,
        type: String
    },
    img: {
        require: true,
        type: String
    },
   
}/* ,{
    collection:'rooms'
} */)


/* 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({}, { strict: false });
const Room = mongoose.model('Room', roomSchema, 'rooms');

module.exports = Room; */
module.export = roomSchema
// module.exports = mongoose.model("rooms", roomSchema);
