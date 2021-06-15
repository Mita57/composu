const {Equipment} = require('../models/models');

class EquipmentController {
    async create(req, res) {
        const {name, type, details} = req.body;
        const eq = await Equipment.create({name, type, details});
        return res.json(eq);
    }

    async getAllByUser(req, res) {
        const {user} = req.body;
        const eqs = await Equipment.findAll({
            where: {
                user: user
            }
        });
        return res.json(eqs);
    }

    async getOne(req, res) {
        const {eqId} = req.body;
        const eq = await Equipment.findByPk(eqId);
        if (!eq) {
           return res.status(404).json({message: "Equipment with this ID doesn't exist"});
        }
        return res.json({eq});
    }

    async getWithFilter(req, res) {
        //TODO: this thing
    }

}

module.exports = new EquipmentController();