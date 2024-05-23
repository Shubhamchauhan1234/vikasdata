const mongoose = require('mongoose');

const UserSchemma=new mongoose.Schema({
 
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true

    },
    password:{
        type: String,
        required: true,
        
    }
    


},{timestamps:true})

const User=mongoose.model('user',UserSchemma)

module.exports=User