const { response } = require('express');
const CourseModel = require('../models/Course')
exports.createcourse = async (req, res) => {
   try {
      const { name, duration, Assignfaculty } = req.body;

      const existingcourse = await CourseModel.findOne({ name })
      if (existingcourse) {
         return res.status(400).json({ message: "couurse already exists" })
      }
      const course = await CourseModel.create({
         name,
         duration,
         Assignfaculty
      })
      res.status(201).json({ message: "course Added Sucessfully" })

   }
   catch (error) {
      console.error(error)
   }
}

exports.getcourse = async (req, res) => {
   try {
      const coursedata = await CourseModel.find().sort({ Createat: -1 });
      res.status(200).json({ sucess: true, count: coursedata.length, data: coursedata });
   }
   catch (error) {
      res.status(500).json({ sucess: false, message: error.message })
   }
}

exports.updatecourse = async (req, res) => {
   try {
      const updatedcourse = await CourseModel.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
         runValidators: true

      })
      if (!updatedcourse) {
         return res.status(404).json({ sucess: false, message: "course not found" })
      }
      res.status(200).json({sucess:true,message:"course updated sucessfully"})
   }
   catch(error) {
      console.error(error)
   }
};
exports.deletecourse = async(req,res)=>{
   try{
     const details = await CourseModel.findByIdAndDelete(req.params.id)
     if(!details){
      res.status(400).json({sucess:false,message:"coursenotfound"})
     }  
     res.status(200).json({success:true,message:"course deleted sucessfully"})
   }
   catch(error){
     console.error(error)
   }
}