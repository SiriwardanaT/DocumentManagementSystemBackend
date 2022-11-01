const mongoose = require('mongoose');

const Client = new mongoose.Schema({
       
    clientName:{
        type:String,
        required:true,
    },
    CompanyName:{
        type:String,
        required:true,
    },
    documentApproved:{
        type:String,
        required:true,
    },
    sector:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Client',Client)