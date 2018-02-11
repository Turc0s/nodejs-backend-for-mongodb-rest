


var mongoose = require("mongoose");

// Genre Schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
    },
    pages: {
        type: String,
    },
    image_url: {
        type: String,
    },
    buy_url: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model("Book", bookSchema);

// Get books
module.exports.getBooks = (callback, limit) => {
    Book.find(callback).limit(limit);
}

// Get a book
module.exports.getBookById = (id, callback) => {
    Book.findById(id, callback);
}

// Add book
module.exports.addBook = (book, callback) => {
    Book.create(book, callback);
}
