var mongoose = require('mongoose');

const schema = mongoose.Schema;

const bookSchema = new schema({
    userId: String,
    bookId: String,
    notes: [{
        title: String,
        body: String,
        createdAt: Date,
        updatedAt: Date
    }]
});

module.exports = mongoose.model('book', bookSchema) 