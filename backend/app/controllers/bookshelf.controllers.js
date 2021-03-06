const { status } = require('express/lib/response');
const Bookshelf = require('../models/bookshelf.model');

exports.create = (req, res) => {
    // Validate request
    console.log(req.body)
    if(!req.body.bookId || !req.body.shelf) {
        res.status(400).send({ message: "content cannot be empty" });
        return;
    }

    // create a bookshelf
    const tutorial = new Bookshelf({
        bookId: req.body.bookId,
        shelf: req.body.shelf,
        notes: req.body.notes || ''
    });

    // save tutorial in database
    tutorial.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding a new book."
            })
        })
    
}

// retrieve and retrun all bookshelf from the database
exports.findAll = (req, res) => {
    Bookshelf.find()
        .then(bookshelf => {
            res.send(bookshelf);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "some error occured while retrieving bookshelf"
            })
        })
}

// find a single book with an id
exports.findOne = (req, res) => {
    let id = req.params.id
    Bookshelf.findOne({bookId : id})
        .then(book => {
            if(!book) {
                res.status(404).send({
                    messsage : "Bookshelf not found with id:" + req.params.id
                });
                return;
            }
            res.send(book);
        }).catch(err => {
            res.status(500).send({
                message: "error retrieving tutorial with id:" + req.params.id
            })
        })

}

// update a book with id
exports.update = (req, res) => {
    // validate request
    if(!req.body) {
        return res.status(400).send({
            message: "content cannot be empty"
        });
    }

    Bookshelf.findOne({ bookId: req.params.id }, (err, book) => {
        if(err) {
            return res.status(500).send({
                message: "error updating book"
            });
        }
        if(!book) {
            return res,status(404).send({
                message: "book not found"
            })
        }
        //update with new values
        book.shelf = req.body.shelf ? req.body.shelf : book.shelf;
        book.notes = req.body.notes ? req.body.notes : book.notes;

        book.save((err, user) => {
            if(err) {
                return res.status(500).send({
                    message: err.message || "some error occured while updating the book"
                })
            }
        })
    })
}

// delete a book with an id
exports.delete = (req, res) => {
    Bookshelf.findOneAndRemove({bookId: req.params.id})
        .then(book => {
            if(!book) {
                res.status(404).send({
                    message: "book not found with id: " + req.params.id
                });
                return;
            }
            res.send({ message: "book removed from shelf succesfully"});
        }).catch(err => {
            res.status(500).send({
                message: "some error occured while deleting the book with id: " +req.params.id
            });
        });
}

exports.deleteAll = (req, res) => {
    Bookshelf.deleteMany()
        .then(data => {
            if(!data.acknowledged) {
                res.status(500).send({
                    message: "could not delete entire bookshelf"
                });
                return;
            }
            res.send({ message: `${data.deletedCount} Books deleted`})
        }).catch(err => {
            res.status(500).send({
                message: "some error occured while deleting all books"
            });
        });
}

//find all book id's with the same shelf name
exports.findShelf = (req, res) => {
    let idList = [];
    let shelfName = req.params.shelf
    Bookshelf.find({shelf: shelfName})
        .then(bookList => {
            if(!bookList) {
                res.status(404).send({
                    message: `no books found in the ${shelfName} shelf`
                })
                return;
            }
            //add book id's to array
            bookList.forEach(book => {
                idList.push(book.bookId)
            });
            res.send(idList);
        }).catch(err => {
            res.status(500).send({
                message: err.message || `some error occured while retrieving the ${shelfName} shelf`
            })
        })
}

