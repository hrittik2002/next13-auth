import mongoose from "mongoose";

export const connect = async() => {
    try{
        mongoose.connect(process.env.mongodb_url!);
        const connection = mongoose.connection;

        connection.on('connected' , ()=> {
            console.log("MongoDB connection sunccessfully established")
        })
        connection.on('error', (err)=> {
            console.log("MongoDB connection error. Please make sure MongoDB is running " + err)
            process.exit();
        })
    }
    catch(error){
        console.log("Something went wrong!");
        console.log(error)
    }
}