const  route = require('express').Router()
const  {createcourse,getcourse,updatecourse,deletecourse } =  require('../controller/Coursecontroller')
route.post('/createcourse',createcourse)
route.get('/getcourse',getcourse)
route.put('/:id',updatecourse)
route.delete('/:id',deletecourse)

module.exports=route;