const payment = require("../Modals/Financial");

const createPayment =async(req,res)=>{

    const projectId = req.body.projectId;
    const projectName = req.body.projectName;
    const cilentName=req.body.cilentName;
    const sprint =req.body.sprint;
    const paymentForSprint =req.body.paymentForSprint;
    const paymentDate =req.body.paymentDate;
    try{
        const newPayment = new payment({
            projectId,
            projectName,
            cilentName,
            sprint,
            paymentForSprint,
            paymentDate




        })

        const paymentResults = await newPayment.save();
        if (paymentResults) {
          res.status(201).send(paymentResults);
        } else {
          res.status(502).send("Something went wrong");
        }

    }catch(e){
        res.status(500).send(e);
    }
}

const fecthPayments = async (req, res) => {
    const fetchResult = await payment.find();
    if (fetchResult) {
      res.status(201).send(fetchResult);
    } else {
      res.status(502).send("Data fetching error");
    }
  };

  const getDataForOneRecord = async (req, res) => {
    const paymentId = req.params.id;
    const fetchOneData = await payment.findById(paymentId);
    if (fetchOneData) {
      res.status(201).send(fetchOneData);
    } else {
      res.status(502).send("Data fetching error for a one record");
    }
  };
const updatePayment = async (req, res) => {
    try {
      const paymentId = req.params.id;
      console.log("id",paymentId);
      const {
        projectId,
        projectName,
        cilentName,
        sprint,
        paymentForSprint,
        paymentDate
      } = req.body;
      const updatedTaskData = new payment({
        projectId,
        projectName,
        cilentName,
        sprint,
        paymentForSprint,
        paymentDate
      });
      const updatedResult = await payment.updateOne(
        { _id: paymentId },
        {
          $set: {
            projectId,
            projectName,
            cilentName,
            sprint,
            paymentForSprint,
            paymentDate
          },
        }
      );
  
      if (updatedResult) {
        res.status(201).send(updatedResult);
      } else if (err) {
        res.status(502).send("Something went wrong while updating data");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
 
  
  const deletePayment = async (req, res) => {
    const paymentId = req.params.id;
    const deleteResult = await payment.findByIdAndDelete(paymentId);
  
    if (deleteResult) {
      res.status(201).send("Successfully Deleted!");
    } else {
      res.status(502).send("Something went wrong while deleting");
    }
  };

module.exports = {
    createPayment,
    fecthPayments,
    updatePayment,
    deletePayment,
    getDataForOneRecord


  };
  

