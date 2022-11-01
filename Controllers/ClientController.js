const express = require('express');
const app = express();

const clientService = require('../Services/ClientService')

app.get('/',clientService.getAllUsers);

app.post('/',clientService.createClient);

app.put('/:id',clientService.updateClient);

app.delete('/:id',clientService.deleteClient);

module.exports = app;