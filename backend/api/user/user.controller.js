// const User = require('../user.model')

const create = (req, res) => {
    res.status(200).json({message: 'create new user'})
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