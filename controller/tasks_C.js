const {getAll,add} = require('../model/tasks_M.js');

async function getAllTasks(req,res) {
    try{
        let tasks = await getAll(req.user.id);
        if(tasks.length == 0){
            return res.status(400).json({message:"אין נתונים"})
        }
        res.status(200).json(tasks)
    }catch(err){
        res.status(500).json({message:"Server error"})
    }
}

async function addTask(req,res) {
    try{
        let text = req.body.text;
        let userId = req.user.id;

        let taskId = await add({text,userId});
        if(!taskId){
            return res.status(500).json({message:"Server error"});
        }
        res.status(201).json({message:"נוסף בהצלחה"});
    }catch(err){
        console.error(err);
        res.status(500).json({message:"Server error"});
    }
}

module.exports={
    getAllTasks,
    addTask
}