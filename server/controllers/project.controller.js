const Project = require("../models/project.model");

module.exports = {
    createProject: (req, res) => {
        Project.create(req.body)
        .then((newProject) => {
            console.log("Adding in a new project:");
            console.log(newProject);
            res.json(newProject);
        })
        .catch((err) => {
            let errorMessage = "Something went wrong in the createProjects on server end.";
            console.log(errorMessage);
            res.json({
                message: errorMessage,
                error: err
            });
        });
    },

    // Gets all of the projects reguardless of project type.
    getAllProjects: (req, res) => {
        Project.find({})
        .then((allProjects) => {
            console.log("Finding all projects in database:");
            console.log(allProjects);
            res.json(allProjects);
        })
        .catch((err) => {
            let errorMessage = "Something went wrong in the getAllProjects on server end.";
            console.log(errorMessage);
            res.json({
                message: errorMessage,
                error: err
            });
        });
    },

    // Gets only one project.
    getAProject: (req, res) => {
        Project.findOne({_id: req.params.id})
        .then((project) => {
            console.log("Found a project in database:");
            console.log(project);
            res.json(project);
        })
        .catch((err) => {
            let errorMessage = "Something went wrong in the getAProject on server end.";
            console.log(errorMessage);
            res.json({
                message: errorMessage,
                error: err
            });
        });
    },

    updateProject: (req, res) => {
        Project.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then((updateProject) => {
            console.log("Updating a project in the database:");
            console.log(updateProject);
            res.json(updateProject);
        })
        .catch((err) => {
            let errorMessage = "Something went wrong in the updateProject on server end.";
            console.log(errorMessage);
            res.json({
                message: errorMessage,
                error: err
            });
        });
    },

    deleteProject: (req, res) => {
        Project.deleteOne({_id: req.params.id})
        .then((deleteConfirm) => {
            console.log("Removing a project from the database:");
            console.log(deleteConfirm);
            res.json(deleteConfirm);
        })
        .catch((err) => {
            let errorMessage = "Something went wrong in the deleteProject on server end.";
            console.log(errorMessage);
            res.json({
                message: errorMessage,
                error: err
            });
        });
    }
};
