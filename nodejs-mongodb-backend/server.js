
const express = require("express");
const bodyParser = require("body-parser");

var mongoose = require("mongoose");

// Connect to Mongoose
mongoose.connect("mongodb://localhost:23100/bookstore");
var db = mongoose.connection;

const app = express();

Genre = require("./models/genre");
Book = require("./models/book");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Please use /api/books or /api/genre")
});

app.get("/api/genres", (req, res) => {
    Genre.getGenres((err, genres) => {
        if(err) {
            throw err;
        }
        res.json(genres);
    });
});

app.post("/api/genres", (req, res) => {
    var genre = req.body;
    Genre.addGenre(genre, (err, genre) => {
        if(err) {
            throw err;
        }
        res.json(genre);
    });
});

app.get("/api/books", (req, res) => {
    Book.getBooks((err, books) => {
        if(err) {
            throw err;
        }
        res.json(books);
    });
});

app.get("/api/book/:_id", (req, res) => {
    Book.getBookById(req.params._id, (err, book) => {
        if(err) {
            throw err;
        }
        res.json(book);
    });
});

app.post("/api/books", (req, res) => {
    var book = req.body;
    Book.addBook(book, (err, book) => {
        if(err) {
            throw err;
        }
        res.json(book);
    });
});

// Set Port
const port = 3000;
app.set("port", port);

app.listen(port);
console.log("Running on port " + port);

