
const mongoose = require('mongoose')
const url = ''

mongoose.connect('mongodb://127.0.0.1:27017')
        .then(db => console.log('Db is connected to ',db.connection.host))
        .catch(err => console.error(err))