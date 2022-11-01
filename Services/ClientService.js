const Client = require('../Modals/Client')

const getAllUsers = async (req, res) => {

    try {
        const clients = await Client.find();
        clients.length > 0 ? res.status(200).send(clients) : res.status(404).send("clients not found")
    }
    catch (err) {
        res.status(500).send("something went wrong");
    }
}

const createClient = async (req, res) => {
    try {
        const Newclient = await Client.create(req.body);
        Newclient ? res.status(201).send(Newclient) : res.send("no user created");
    } catch (err) {
        res.status(500).send("something went wrong");
    }
}

const updateClient = async (req, res) => {
    try {
        const Isupdate = await Client.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(Isupdate)

    } catch (err) {
        res.status(500).send("something went wrong");
    }
}

const deleteClient = async (req, res) => {
    try {
        const deleteClient = await Client.findOneAndDelete(req.params.id);
        deleteClient._id != null ? res.status(200).send("Deleted success") : res.status(500).send("deleted incompleted");
    }
    catch (err) {
        res.status(500).send("something went wrong");
    }
}



module.exports = { getAllUsers, createClient, updateClient, deleteClient }