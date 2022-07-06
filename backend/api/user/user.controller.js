const { User } = require('../../models/index');

const create = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.create(req.body);
    res.status(200).json({user, message: 'create new user'});
}

const getAll = (req, res) => {
    res.status(200).json({message: `get all users`})
}

const getOne = (req, res) => {
    const id = req.params.id
    res.status(200).json({message: `get one user with id:${id}`})
}

const update = (req, res) => {
    const id = req.params.id
    res.status(200).json({message: `update user with id:${id}`})
}

const remove = (req, res) => {
    const id = req.params.id
    res.status(200).json({message: `remove user with id:${id}`})
}

module.exports = { create, getOne, getAll, update, remove };