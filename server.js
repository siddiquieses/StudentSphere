const express = require('express')
const dotenv=require('dotenv')
const cors= require('cors')
const connectdbs = require('./Config/db')
dotenv.config()
connectdbs()

const app=express();
// console.log(app)
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('backend is running')
})
app.use('/api/admin',require('./routes/adminroute'))
const Port = process.env.PORT || 5000;
app.listen(Port,()=>{
    console.log(`server is running on port `)
})