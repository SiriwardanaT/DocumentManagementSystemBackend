const express = require("express");
const app = express.Router();
const FinancialService = require('../Services/FinancialService');

//:POST method
app.post('/createPayments',FinancialService.createPayment);

//:GET method
app.get('/getPayments',FinancialService.fecthPayments);

app.get('/getDataFor/:id',FinancialService.getDataForOneRecord);

//:PUT method
app.put('/updatePayment/:id',FinancialService.updatePayment);

//:DELETE method
app.delete('/deletePayment/:id',FinancialService.deletePayment);

module.exports = app;