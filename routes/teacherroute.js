const route = require('express').Router()
const {createteacher}= require('../controller/Teachercontroller')

route.post('/addteacher',createteacher)
module.exports=route;

