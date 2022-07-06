const { Book } = require('../../models/index');

const create = async (req, res) => {
    const { name, googleId, UserId } = req.body;
    const book = await Book.create(req.body);
    res.status(200).json({book, message: 'create new book'})
}

const getAll = (req, res) => {
    res.status(200).json({message: `get all books`})
}

const getOne = (req, res) => {
    const id = req.params.id
    res.status(200).json({message: `get one book with id:${id}`})
}

const update = (req, res) => {
    const id = req.params.id
    res.status(200).json({message: `update book with id:${id}`})
}

const remove = (req, res) => {
    const id = req.params.id
    res.status(200).json({message: `remove book with id:${id}`})
}

module.exports = { create, getOne, getAll, update, remove };