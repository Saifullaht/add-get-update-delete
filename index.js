import express from "express";
const PORT = 2000;
 
import userRoutes from "./router/users.js"
 import taskRoutes from "./router/tasks.js"
import 'dotenv/config'
import mongoose from "mongoose";
const app = express();

console.log( "mongodb conected " + process.env.MONGODBURI);


app.use(express.json())
app.use("/user" , userRoutes)
app.use("/task" , taskRoutes)
// const task =[
//     {
    //          id:"saifullah",
    //          age:23,
//          education:"intermediate",
//     }
// ]

mongoose.connect(process.env.MONGODBURI).then( ()=>{ console.log("mongodb conected 02")  
}) .catch( (err) => console.log(err)
)

// app.get("/", (req , res) =>{
//     res.status(200).send( "server is running");
//     console.log("get cont")
// })

// app.post("/", (req , res) =>{
    //     res.send("Hello World! post");
    //     console.log("post cont")
    // })
    // app.put("/", (req , res) =>{
        //     res.send("Hello World! put");
        //     console.log("put cont")
        // })
        // app.delete("/", (req , res) =>{
            //     res.status(200).send ({task});
            //     console.log("delete cont")
            // })
            
            app.listen(PORT , ()=>{
                console.log("conected api");
                
 })