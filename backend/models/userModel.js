const mongoose = require('mongoose');
const validator = require('validator');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name" ]
    },
    email:{
        type:String,
        required:[true,"Please enter your email" ],
        unique:true,
        validator:[validator.isEmail,"Please enter a valid email"]

    },
    password:{
        type:String,
        required:[true,"Please enter your password" ],
        minlength:[8,"Your password must be at least 8 characters long"]
    },
    confirmPassword:{
        type:String,
        required:[true,"Please confirm your password" ],
        minlength:[8,"Your password must be at least 8 characters long"]
    }
})

const User=mongoose.model('User',userSchema);

module.exports=User;