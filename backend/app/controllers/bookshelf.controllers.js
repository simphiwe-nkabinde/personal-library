const Bookshelf = require('../models/bookshelf.model');

exports.create = (req, res) => {
    console.log("post request: ");
    console.log(req.body);
    // Validate request
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
                message: err.message || "Some error occured while creating the new bookshelf."
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

// find a single tutorial with an id
exports.findOne = (req, res) => {
    Bookshelf.findOne({bookId : req.params.id})
        .then(tutorial => {
            if(!tutorial) {
                res.status(404).send({
                    messsage : "Bookshelf not found with id:" + req.params.id
                });
                return;
            }
            res.send(tutorial);
        }).catch(err => {
            res.status(500).send({
                message: "error retrieving tutorial with id:" + req.params.id
            })
        })

}

// update a tutorial with id
exports.update = (req, res) => {
    // validate request
    if(!req.params.bookId) {
        res.status(400).send({
            message: "content cannot be empty"
        });
    }

    // find note and update it with the request body
    Bookshelf.findOneAndUpdate({ bookId: req.params.id } , {
        // bookId: req.body.bookId,
        shelf: req.body.shelf ? req.body.shelf : '',
        notes: req.body.notes ? req.body.notes : ''
    }, {returnNewDocument: true})
        .then(tutorial => {
            if(!tutorial) {
                res.status(404).send({
                    message: "tutorial not found with id: " + req.params.id
                })
                return;
            }
            res.send(tutorial)
        }).catch(err => {
            res.status(500).send({
                message: "some error occured while updating tutorial with id: " + req.params.id
            })
        })
}

// delete a tutorial with an id
exports.delete = (req, res) => {
    Bookshelf.findOneAndRemove({bookId: req.params.id})
        .then(tutorial => {
            if(!tutorial) {
                res.status(404).send({
                    message: "tutorial not found with id: " + req.params.id
                });
                return;
            }
            res.send({ message: "Note deleted succesfully"});
        }).catch(err => {
            res.status(500).send({
                message: "some error occured while deleting tutorial with id: " +req.params.id
            });
        });
}

exports.deleteAll = (req, res) => {
    Bookshelf.deleteMany()
        .then(data => {
            if(!data.acknowledged) {
                res.status(500).send({
                    message: "could not delete all bookshelf"
                });
                return;
            }
            res.send({ message: `${data.deletedCount} Bookshelfs deleted`})
        }).catch(err => {
            res.status(500).send({
                message: "some error occured while deleting all bookshelf"
            });
        });
}

exports.findShelfCompleted = (req, res) => {
    Bookshelf.find({shelf: 'completed'})
        .then(bookshelf => {
            if(!bookshelf) {
                res.status(404).send({
                    message: "no completed bookshelf found"
                })
                return;
            }
            res.send(bookshelf);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "some error occured while retrieving bookshelf"
            })
        })
}

exports.findShelfReading = (req, res) => {
    Bookshelf.find({shelf: 'reading'})
        .then(bookshelf => {
            if(!bookshelf) {
                res.status(404).send({
                    message: "no reading bookshelf found"
                })
                return;
            }
            res.send(bookshelf);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "some error occured while retrieving bookshelf"
            })
        })
}

exports.findShelfWishlist = (req, res) => {
    Bookshelf.find({shelf: 'wishlist'})
        .then(bookshelf => {
            if(!bookshelf) {
                res.status(404).send({
                    message: "no wishlist bookshelf found"
                })
                return;
            }
            res.send(bookshelf);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "some error occured while retrieving bookshelf"
            })
        })
}

