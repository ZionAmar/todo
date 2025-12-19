const express = require('express');
const router = express.Router();
const {getAllTasks,addTask,getTask} = require('../controller/tasks_C');
const {isLoggedIn} = require('../middelware/auth_MID');
const {validValues,isValidId} = require('../middelware/tasks_MID');


router.get('/',isLoggedIn,getAllTasks);
router.post('/',isLoggedIn,validValues,addTask);
router.get('/:id',isLoggedIn,isValidId,getTask);


module.exports = router;