import express, { Router } from "express";

const router = express.Router();

const courses = [
    {
        id:1,
       coursename: "web and app",
       education:"intermediate",
       age: 18
    }];

router.get("/" , (req , res) =>{
    res.status(200).json({
        error : false,
        data : courses,
        msg : "user fetch successfully"
    })
})
router.post("/one" , (req , res) =>{
    const {coursename , education , age } = req.body;
    console.log("fullanme22" , coursename , age , education)
    courses.push({coursename , education , age , id: courses.length + 1})
    res.status(201).json({
        error : false,
        data : courses,
        msg : "course added succesfully "
    })
})
router.get("/:id" , (req , res) =>{
    const newcourse = courses.find((data)=> data.id == req.params.id)
    if(!newcourse){
        return res.status(404).json({
            error : true,
            data:null,
            msg : "course not found"
        })
    }
    
    res.status(200).json({
        error : true,
        data : newcourse,
        msg : "course found successfully"
    })
    })
    

export default router;
    
