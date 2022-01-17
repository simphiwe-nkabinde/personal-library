var mongoose = require('mongoose');

const schema = mongoose.Schema;

const bookshelfSchema = new schema({
    bookId: {type: String, required: true},
    shelf: {
        type: String, 
        required: true, 
        lowercase: true,
        enum: ['completed', 'reading', 'wishlist']
    },
    notes: String
});

module.exports = mongoose.model('bookshelf', bookshelfSchema) 