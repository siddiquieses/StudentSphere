const name = require('mongoose');

const adminschema = new name.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{
        type:String,
        default:'admin'
    }
},{ timestamps:true}
)
module.exports= name.model('Admin',adminschema)