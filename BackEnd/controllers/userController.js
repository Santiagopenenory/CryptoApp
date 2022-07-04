const User = require('../models/User.js');

module.exports.checkUser = async(req,res)=>{
    const user = {name: `'${req.query.name}'`,email: `'${req.query.email}'`};
    User.find({user},(err,data)=>{
        
        if(!err){
            if(data.length !== 0){
                res.status(200).json({
                    message:"existing user",
                    user:data,
                    exists:true
                })
            }else{
                    res.status(200).json({
                    message:"the user does not exist",
                    user:data,
                    exists:false
                })
            }
        }else{
            res.status(400).send("error listing user")
        }
    })
}

module.exports.addUser = async(req,res)=>{
    const user = new User({
                  name:req.body.name,
                  email:req.body.email,
                  coins:req.body.coins,
                });

    user.save((err,data)=>{

        if(!err){
            res.status(200).json({
                message:"user added successfully",
                user:data
            })
        }else{
            res.status(400).send("error inserting a user")
        }
    })
}


module.exports.removeUser = async(req,res)=>{
    User.remove(req.params.email,(err,data) =>{
        if(!err){
            res.status(200).json({
                code:200,
                message:'User removed successfully',
                data:data
            })
        }else{
            res.status(400).send("error removing user")
        }

    })
}
module.exports.addCoin = async (req,res)=>{
    User.updateOne({email:req.body.email},{$push:{coins:req.body.coin}},(err,data)=>{
        if(!err){
            res.status(200).json({
                message:"coin added successfully",
                user:data
            })
        }else{
            res.status(400).send("error adding a coin");
        }
    })
}

module.exports.removeCoin = async (req,res)=>{
    User.updateOne({email:req.body.email},{$pull:{coins:{$eq:req.body.coin}}},(err,data)=>{
        if(!err){
            res.status(200).json({
                message:"coin removed successfully",
                user:data
            })
        }else{
            res.status(400).send("error adding a coin")
        }
    })
}

module.exports.getCoins = async(req,res)=>{
    const user = {email: `'${req.query.email}'`};
    User.findOne({email:req.query.email},{coins:1},(err,data)=>{
        if(!err){
            res.status(200).json(data.coins)
        }else{
            res.status(400).send("error getting user coins")
        }
    })
}


