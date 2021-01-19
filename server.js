// load the things we need
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const fs = require('fs');

// set the view engine to ejs
app.set('view engine', 'ejs');

// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let rawdataDB = fs.readFileSync('data/books_db.json');
let bookDB = JSON.parse(rawdataDB);

// index page
app.get('/', (req, res) => {
    res.render('pages/index');
});

// books page
app.get('/books', (req, res) => {
    res.render('pages/books', {
        bookDB: bookDB.books
    });
});

// book detail page
app.get('/book/:id', (req, res) => {
    console.log(req.params.id)
});

// about page
app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
