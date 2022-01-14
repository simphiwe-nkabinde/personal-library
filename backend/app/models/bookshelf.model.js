var mongoose = require('mongoose');

const schema = mongoose.Schema;

const bookshelfSchema = new schema({
    bookId: String,
    shelf: String,
    notes: String
});

module.exports = mongoose.model('bookshelf', bookshelfSchema) 