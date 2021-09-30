require('../db/conn')
const mongoose = require('mongoose');
const registerSchema =new mongoose.Schema({
    FirstName :{ type : String , required : true },
    LastName  : { type : String , required : true } ,
    Email :{
        type :String,
        required:true,
        unique :true
    },
    Phone_number:{
        type:Number,
        required :true,
        unique: true
    },
    username : { type : String , required : true } ,
    psw : { type : String , required : true } ,
    confirm_psw : { type : String , required : true } ,
})

var register = mongoose.model('register',registerSchema);
 module.exports = register ;