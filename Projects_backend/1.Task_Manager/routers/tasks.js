const express = require('express');
const Routes = express.Router();
const {GetallTasks,
    CreatenewTasks,
    GetSingleTask,
    UpdateTask,
    DeleteTask} = require('../controllers/tasks')
Routes.route('/').get(GetallTasks).post(CreatenewTasks);
Routes.route('/:id').get(GetSingleTask).patch(UpdateTask).delete(DeleteTask);
module.exports=Routes;