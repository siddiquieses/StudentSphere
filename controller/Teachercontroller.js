const Teachermodel = require('../models/teacher')

exports.createteacher = async (req, res) => {
    try {
        const { name, email, password , designation, contact, salary } = req.body;
        const addteacher = await Teachermodel.create({
            name,
            email,
            password,
       
            designation,
            contact,
            salary
        })
        res.status(201), json({ message: "Teacher Added Sucessfully",data:addteacher });
    }
    catch (error) {
        console.error(error)
    }
} 

