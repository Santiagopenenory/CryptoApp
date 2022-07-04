const  {Schema,model} = require('mongoose')


const User = new Schema({
        name:{
            type:  String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        coins:[]
});


module.exports = model('User',User)