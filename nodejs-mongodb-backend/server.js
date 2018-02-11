
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

app.get("/api/books", (req, res) => {
    Book.getBooks((err, books) => {
        if(err) {
            throw err;
        }
        res.json(books);
    });
});

// Set Port
const port = 3000;
app.set("port", port);

app.listen(port);
console.log("Running on port " + port);

