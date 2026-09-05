const { response } = require('express')
const Admin = require('../models/Admin')
const bcrypt= require('bcryptjs')

exports.register = async(req,res)=>{
try{
 const {name,email,password}=req.body
 const adminexists = await  Admin.findOne({email}) 
 if(adminexists) return response.json({message:'Admin Already Exists'})

 const hashpassword= await bcrypt.hash(password,10) 

 const admin = await Admin.create({name,email,password: hashpassword});
 res.status(201).json({message:"Admin Created sucessfully "})

}
catch(error){
     res.status(500).json({message:"api error"})
}
}