const Project = require('../Modals/Project')

const getAllProjects = async (req, res) => {

    try {
        const project = await Project.find();
        project.length > 0 ? res.status(200).send(project) : res.status(404).send("Project not found")
    }
    catch (err) {
        console.log(err)
        res.status(500).send("something went wrong");
    }
}

const createProject = async (req, res) => {
    try {
        const Newproject = await Project.create(req.body);
        Newproject ? res.status(201).send(Newproject) : res.send("no user created");
    } catch (err) {
        res.status(500).send("something went wrong");
    }
}

const updateProject = async (req, res) => {
    try {
        const Isupdate = await Project.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(Isupdate)

    } catch (err) {
        res.status(500).send("something went wrong");
    }
}

const deleteProject = async (req, res) => {
    try {
        const deleteProject = await Project.findOneAndDelete(req.params.id);
        deleteProject._id != null ? res.status(200).send("Deleted success") : res.status(500).send("deleted incompleted");
    }
    catch (err) {
        res.status(500).send("something went wrong");
    }
}



module.exports = { getAllProjects, createProject, updateProject, deleteProject }