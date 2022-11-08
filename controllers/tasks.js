const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    const task = await Task.find({})
    res.status(200).json({task})
}

const createTask = async (req, res) => {
    console.log(req.body)
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

const getTask = async (req, res, next) =>{
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if (!task) {
        return res.status(404).send('No task with given ID')
    }
    res.status(200).json({task})
}

const deleteTask = async (req, res, next) => {
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if (!task) {
        return res.status(404).send('No task with given ID')
    }
    res.status(200).json({task})
}

const updateTask = async (req, res, next) => {
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
        new:true,
        runValidators:true
    })
    if (!task) {
        return res.status(404).send('No task with given ID')
    }
    res.status(200).json({task})
}

const deleteAllTasks = async (req, res) => {
    
    const task = await Task.deleteMany({})
    res.status(200).json({task})
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask,
    deleteAllTasks
}