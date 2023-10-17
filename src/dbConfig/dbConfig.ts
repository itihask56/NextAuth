import mongoose from "mongoose";
export async function connect(){
    try {
        mongoose.connect(process.env.URL!)
        const connection = mongoose.connection;
        connection.on("connected",()=>{
            console.log("Mongodb is connected successfully")
        })

        connection.on('error',(err)=>{
            console.log("database connection error"+err)
            process.exit();
        })
    } catch (error) {
        console.log("Someting went wrong")
        console.log(error)
        
    }
}