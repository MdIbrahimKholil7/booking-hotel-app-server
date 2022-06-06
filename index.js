const express = require('express');
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
const mongoose = require('mongoose');
const getRooms = require('./api/getRooms.js')
require('dotenv').config()
// middleware 
app.use(cors())
app.use(express.json())

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.za0v6.mongodb.net/hote_app?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
    .then(() => console.log('connection successful'))
    .catch(err => console.log(err))


    /* const connection=mongoose.connection
    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open', function () {
        connection.db.collection("rooms", function(err, collection){
        collection.find({}).toArray(function(err, data){
          console.log(data); // data printed in console
        })
      });
    });  */

// set route 
app.use('/room', getRooms)
app.get('/', async (req, res) => {
    res.send('server running')
})
app.listen(port, () => {
    console.log('server running on', port)
})
