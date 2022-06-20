const ProjectController = require('../controllers/project.controller');

module.exports = (app) => {
    const allRoute = '/api/projects';
    const singleRoute = '/api/projects/:id'
    app.post(allRoute, ProjectController.createProject);
    app.get(allRoute, ProjectController.getAllProjects);
    app.get(singleRoute, ProjectController.getAProject);
    app.put(singleRoute, ProjectController.updateProject);
    app.delete(singleRoute, ProjectController.deleteProject);
};
