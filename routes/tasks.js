const express = require('express')
const router = express.Router()

const {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask,
    deleteAllTasks
} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask).delete(deleteAllTasks)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;