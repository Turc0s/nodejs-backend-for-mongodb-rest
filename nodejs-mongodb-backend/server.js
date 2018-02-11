
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Please use /api/books or /api/genre")
});

app.get("/api/genres", (req, res) => {

});

// Set Port
const port = 3000;
app.set("port", port);

app.listen(port);
console.log("Running on port " + port);

