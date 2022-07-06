const express = require('express');
const { create, getOne, getAll, update, remove } = require('./note.controller')
const router = express.Router();

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router;