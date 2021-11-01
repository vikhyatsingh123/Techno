const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email");
            }
        }
    },
    phone:{
        type:Number,
        minLength:10,
        maxLength:12,
        required:true
    },
    message:{
        type:String,
        minLength:5,
        required:true
    }
});

const User = mongoose.model("User",Schema);

module.exports=User;