const mongoose  = require('mongoose')

const Financial = new mongoose.Schema({
    
    projectId:{
        type:String,
        required:true
    },
    projectName:{
       type:String,
       required:true
    },

    cilentName:{
        type:String,
        required:true
        
    },
    sprint:{
        type:Number,
        required:true
    },
    paymentForSprint:{
        type:Number,
        required:true
    },
    paymentDate:{
        type:String,
        required:true
       
    }
   
   
})
 
module.exports = mongoose.model("Financial",Financial);