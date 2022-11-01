const mongoose  = require('mongoose')

const Task = new mongoose.Schema({
    
    sprint:{
        type:Number,
        required:true
    },
    useCaseId:{
       type:String,
       required:true
    },

    taskDescription:{
        type:String,
        required:true
        
    },
    assignee:{
        type:String,
        required:true
    },
    anyOtherConcerns:{
        type:String
       
    }
   
   
})
 
module.exports = mongoose.model("Task",Task);