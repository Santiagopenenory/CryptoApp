
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(db => console.log('Db is connected to ',db.connection.host))
        .catch(err => console.error(err))