const {Project} = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class ProjectController {
    async create(req, res, next) {
        try {
            const {title, details, owner} = req.body;
            const {picture} = req.files;
            let filename = uuid.v4() + '.jpg';
            await picture.mv(path.resolve(__dirname, '..', 'static', filename));

            const project = await Project.create({title, details, owner, picture: filename, state: 'o'});
            return res.json(project);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAllByUser(req, res) {
        const {user} = req.body;
        const projs = await Project.findAll({
            where: {
                user: user
            }
        });
        return res.json(projs);
    }

    async getAllWithFilter(req, res) {
        const {user} = req.body;
        const projs = await Project.findAll({
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