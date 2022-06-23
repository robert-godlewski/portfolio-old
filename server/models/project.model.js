const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Need a name for the new project."],
        minlength: [3, "Name length needs to be at least 3 characters!"]
    },
    projectType: {
        type: String,
        required: [true, "Need to pick a project type."],
        enum: [
            "Programming - Python",
            "Programming - JavaScript",
            "Music - Producing",
            "Music - Audio Engineering"
        ]
    },
    // Details about the project
    info: {type: String},
    // Images of the project
    //imageLinkList: [{imagelink: String}],
    // Audio/Visual links for the project
    streamingLink: {type: String},
    // Other links for the project
    link: {type: String},
}, {timestamps: true});


const Project = mongoose.model('projects', ProjectSchema);
module.exports = Project;
