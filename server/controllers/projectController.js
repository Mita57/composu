const {Project} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProjectController {
    async create(req, res) {
        const {name} = req.body;
        const project = Project.create({name});
        return res.json(project);
    }

    async getAllByUser(req, res) {
        const {user} = req.body;
        const projs = Project.findAll({
            where: {
                user: user
            }
        });
        return res.json(projs);
    }

    async getOne(req, res) {
        const projId = req.body;
        const project = await Project.findByPk(projId);
        if (!project) {
            return res.status(404).json({message: 'No projects with this ID '});
        }
        return res.json(project);

    }


}

module.exports = new ProjectController();