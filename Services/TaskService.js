const tasks = require("../Modals/task");
// const task = require("../Modals/testModal");

const createTask =async(req,res)=>{

    const sprint = req.body.sprint;
    const useCaseId = req.body.useCaseId;
    const taskDescription=req.body.taskDescription;
    const assignee =req.body.assignee;
    const anyOtherConcerns =req.body.anyOtherConcerns;
    try{
        const newTask = new tasks({
            sprint,
            useCaseId,
            taskDescription,
            assignee,
            anyOtherConcerns



        })

        const taskCreationResults = await newTask.save();
        if (taskCreationResults) {
          res.status(201).send(taskCreationResults);
        } else {
          res.status(502).send("Something went wrong");
        }

    }catch(e){
        res.status(500).send(e);
    }
}

const fecthTasks = async (req, res) => {
    const fetchResult = await tasks.find();
    if (fetchResult) {
      res.status(201).send(fetchResult);
    } else {
      res.status(502).send("Data fetching error");
    }
  };

  const getDataForOneRecord = async (req, res) => {
    const taskId = req.params.id;
    const fetchOneData = await tasks.findById(taskId);
    if (fetchOneData) {
      res.status(201).send(fetchOneData);
    } else {
      res.status(502).send("Data fetching error for a one record");
    }
  };

const updateTasks = async (req, res) => {
    try {
      const taskId = req.params.id;
      console.log("id",taskId);
      const {
        sprint,
        useCaseId,
        taskDescription,
        assignee,
        anyOtherConcerns
      } = req.body;
      const updatedTaskData = new tasks({
        sprint,
        useCaseId,
        taskDescription,
        assignee,
        anyOtherConcerns
      });
      const updatedResult = await tasks.updateOne(
        { _id: taskId },
        {
          $set: {
            sprint,
        useCaseId,
        taskDescription,
        assignee,
        anyOtherConcerns
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
  
 
  
  const deleteTasks = async (req, res) => {
    const taskId = req.params.id;
    const deleteResult = await tasks.findByIdAndDelete(taskId);
  
    if (deleteResult) {
      res.status(201).send("Successfully Deleted!");
    } else {
      res.status(502).send("Something went wrong while deleting");
    }
  };

module.exports = {
    createTask,
    fecthTasks,
    updateTasks,
    deleteTasks,
    getDataForOneRecord


  };
  