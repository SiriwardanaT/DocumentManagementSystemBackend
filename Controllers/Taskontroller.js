const express = require("express");
const app = express.Router();
const taskService = require('../Services/TaskService');

//:POST method
app.post('/createTasks',taskService.createTask);

//:GET method
app.get('/getTasks',taskService.fecthTasks);

app.get('/getDataFor/:id',taskService.getDataForOneRecord);

//:PUT method
app.put('/updateTasks/:id',taskService.updateTasks);

//:DELETE method
app.delete('/deleteTasks/:id',taskService.deleteTasks);

module.exports = app;

