// const Note = require('../note.model')

const create = (req, res) => {
    res.status(200).json({message: 'create new note'})
}

const getAll = (req, res) => {
    res.status(200).json({message: `get all notes`})
}

const getOne = (req, res) => {
    const id = req.params.id
    res.status(200).json({message: `get one note with id:${id}`})
}

const update = (req, res) => {
    const id = req.params.id
    res.status(200).json({message: `update note with id:${id}`})
}

const remove = (req, res) => {
    const id = req.params.id
    res.status(200).json({message: `remove note with id:${id}`})
}

module.exports = { create, getOne, getAll, update, remove };