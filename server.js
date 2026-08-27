const name = require('http')
const server = name.createServer((request,response)=>{
response.end("Node js")
})


server.listen(3000,()=>{
    console.log("Server is running")
})