const mongoose = require('mongoose')
const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected sucessfully")
    }
    catch (error) {
        console.error("mongodb connetion failed", error.message)
       process.exit(1)
    }
}
module.exports=connectdb;