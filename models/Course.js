const  mongoose= require('mongoose');
const  courseschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    duration:{
        type:String,
    },
    Assignfaculty:{
        type:String,
    }
},{timestamps:true})
module.exports=mongoose.model('Course',courseschema)