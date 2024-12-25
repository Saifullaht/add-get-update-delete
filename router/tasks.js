import express, { Router } from "express";
import Task from "../models/Task.js";
const router = express.Router();

router.post("/" , async (req , res) =>{
    const {task} = req.body;
    console.log("tsks" + task)
    let newtask = Task({task})
    newtask = await newtask.save()
    res.status(201).json({
        error : false,
        data : newtask,
        msg : "task added successfully"
    })
})

router.get("/" , async (req , res) =>{
     
    let Tasks= await Task.find()   
    
    res.status(200).json({
        error : false,
        data : Tasks,
        msg : "task fetch succesfully"
    })
})
router.get("/:id" , async (req , res) =>{
     const task = await Task.findById(req.params.id) 
     if(!task)return res.status(404).json({
        error : false,
        data : null,
        msg : "task not found"
    })
    res.status(200).json({
            error : true,
            data : task,
            msg : "task fetch succesfully"
        })
}) 
router.put("/:id" , async (req , res) =>{
    const { task , completed } = req.body;
     const taskdb = await Task.findById(req.params.id) 
     if(!taskdb)return res.status(404).json({
        error : false,
        data : null,
        msg : "task not found"
    })
    if(task)  taskdb.task = task;
    if(completed)  taskdb.completed = completed;
    await taskdb.save()
    res.status(200).json({
            error : true,
            data : task,
            msg : "task updated succesfully"
        })
}) 
router.delete("/:id" , async (req , res) =>{
    
     const taskdb = await Task.findById(req.params.id) 
     if(!taskdb)return res.status(404).json({
        error : false,
        data : null,
        msg : "task not found"
    })
     
    await Task.deleteOne({_id : req.params.id})
    res.status(200).json({
            error : true,
            data :  null,
            msg : "task  deleted succesfully"
        })
}) 
 

export default router;