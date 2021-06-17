const {Project} = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const {Op} = require("sequelize");

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
        const {user} = req.query.user;
        const projs = await Project.findAll({
            where: {
                user: user
            }
        });
        return res.json(projs);
    }

    async getAllWithFilter(req, res) {
        const {title, details, owner} = req.query;

        const projs = await Project.findAll({
            where: {
                title: {
                    [Op.like]: `%${title}%`
                },
                details: {
                    [Op.like]: `%${details}`
                },
                owner: {
                    [Op.like]: `%${owner}%`
                }
            }
        });

        return res.json(projs);
    }

    async getOne(req, res) {
        const projId = req.query.id;
        const project = await Project.findByPk(projId);
        if (!project) {
            return res.status(404).json({message: 'No projects with this ID '});
        }
        return res.json(project);
    }

    async updateProj(req, res) {
        const {projId, title, details, state} = req.body;
        const {picture} = req.files;
        const proj = Project.findByPk(projId);
        if (picture) {
            let filename = uuid.v4() + '.jpg';
            await picture.mv(path.resolve(__dirname, '..', 'static', filename));
            proj.picture = filename;
        }

        if (title) {
            proj.title = title;
        }

        if (details) {
            proj.details = details;
        }

        if (state) {
            proj.state = state;
        }

        await proj.save();
        return res.json(proj);
    }

    async deleteProj(req, res) {
        const {projId} = req.body;

        const proj = await Project.findByPk(projId);
        await proj.destroy();

        return res.json(projId);
    }


}

module.exports = new ProjectController();