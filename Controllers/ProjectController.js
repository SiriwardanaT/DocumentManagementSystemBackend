const express = require('express');
const app = express();

const projectService = require('../Services/ProjectService')

app.get('/',projectService.getAllProjects);

app.post('/',projectService.createProject);

app.put('/:id',projectService.updateProject);

app.delete('/:id',projectService.deleteProject);

module.exports = app;