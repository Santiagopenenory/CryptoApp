
const mongoose = require('mongoose')
const url = ''

mongoose.connect('mongodb://mongodb')
        .then(db => console.log('Db is connected to ',db.connection.host))
        .catch(err => console.error(err))