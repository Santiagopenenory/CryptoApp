
const mongoose = require('mongoose')


mongoose.connect('mongodb://mongo/MongoDB')
        .then(db => console.log('Db is connected to ',db.connection.host))
        .catch(err => console.error(err))