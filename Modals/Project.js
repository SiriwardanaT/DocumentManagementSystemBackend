const mongoose = require('mongoose');

const Project = new mongoose.Schema({ 
  
    projectTitle:{
        type:String,
        required:true,
    },
    client:{
        type:String,
        required:true,
    },
    documentOwner:{
        type:String,
        required:true,
    },
    documentApproved:{
        type:String,
        required:true
    },
    industry:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Project',Project)