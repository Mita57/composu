const ApiError = require('../error/apiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models/models');
const {Op} = require("sequelize");

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '7d'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Invalid email or password'));
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('A user with the same email already exists'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, password: hashPassword});
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findByPk(email);
        if (!user) {
            return next(ApiError.notFound('User not found'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Invalid credentials'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    }

    async updateCredentials(req, res) {
        const {email, name, birth_date, bio, band, location} = req.body;

        let user = await User.findByPk(req.user.email);

        if (email) {
            const isNewEmailTaken = !!await User.findByPk(email);

            if (isNewEmailTaken) {
                return res.JSON({msg: 'Email is already taken'}).status(409);
            }
            user.email = email;
        }

        if (name) {
            user.name = name;
        }

        if (birth_date) {
            user.birth_date = birth_date;
        }

        if (bio) {
            user.bio = bio;
        }

        if (band) {
            user.band = band;
        }

        if (location) {
            user.location = location;
        }
        await user.save();

        return res.json(user);
    }

    async removeUser(req, res) {
        const {id} = req.body;

        const user = await User.findByPk(id);
        await user.destroy;
        return res.json(id);
    }

    async findUserById (req, res) {
        const {id} = req.query.id;

        const users = await User.findByPk(id);
        return res.json(id);
    }

    async findUsersByFilter(req, res) {
        const {email, name, birth_date, band, location} = req.query.filter;

        const users = await User.findAll({
            where: {
                email: {
                    [Op.like]: `%${email}%`
                },
                name: {
                    [Op.like]: `%${name}%`
                },
                birth_date: {
                    [Op.like]: `%${birth_date}%`
                },
                band: {
                    [Op.like]: `%${band}%`
                },
                location: {
                    [Op.like]: `%${location}%`
                },
            }
        });

        return res.json(users);
    }


}

module.exports = new UserController();