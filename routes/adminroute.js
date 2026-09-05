const router = require('express').Router();
const {register}=require('../controller/Admincontroller')
router.post('/createadmin',register)

module.exports=router