import express, { Router } from "express";

const router = express.Router();

const users = [
    {
        id: 1,
        name: " saifullah",
        email: "saifullah@example.com",
        age: 30
    }];

router.get("/" , (req , res) =>{
    res.status(200).json({
        error : false,
        data : users,
        msg : "user fetch successfully"
    })
})
router.post("/" , (req , res) =>{
    const {name , email , age } = req.body;
    console.log("fullanme22" , name , age , email)
users.push({name , email , age , id: users.length + 1})
    res.status(201).json({
        error : false,
        data : users,
        msg : "user add ho raaha hai "
    })
})
router.get("/:id" , (req , res) =>{
    const user = users.find((data)=> data.id == req.params.id)
    if(!user){
        return res.status(404).json({
            error : true,
            data:null,
            msg : "user not found"
        })
    }
    
    res.status(200).json({
        error : true,
        data : user,
        msg : "user mill gya hai hai "
    })
    })
    

export default router;
    
