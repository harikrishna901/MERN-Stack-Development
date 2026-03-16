const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const {createCustomerError} = require('../errors/customerApiError');
const GetallTasks= asyncWrapper(async (req,res)=>{

        const task = await Task.find({});
        res.status(200).json({status:success,data:{ tasks} });

})
const CreatenewTasks= asyncWrapper(async (req,res)=>{

        const task = await Task.create(req.body);
        res.status(200).json({task});

})
const GetSingleTask=asyncWrapper(async (req,res)=>{

        const {id:textid} = req.params;
        const task = await Task.findOne({_id:textid});
        if(!task){
                return  next(createCustomerError(`person not found with id:${textid}`,404));
        }
        res.status(200).json({task});
})
const UpdateTask=asyncWrapper(async (req,res)=>{

        const {id:textid} = req.params;
        const task = await Task.findOneAndUpdate({_id:textid},req.body,{
            new:true,
            runValidators:true
        });
        if(!task){
                return next(createCustomerError(`person not found with id:${textid} for updation`,404));
        }
        res.status(200).json({task});
})
const DeleteTask=asyncWrapper(async (req,res)=>{

        const {id:textid} = req.params;
        const task = await Task.deleteOne({_id:textid});
        if(!task){
           return next(createCustomerError(`person not found with id:${textid} for deletion`,404));
        }
        res.status(200).json({task});
})
module.exports={GetallTasks,
                CreatenewTasks,
                GetSingleTask,
                UpdateTask,
                DeleteTask}

