const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
app.set('view engine', 'ejs');
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

const exampleRoute = require('./routes/FormRoute');
app.use('/form', exampleRoute);

app.use('/', (req, res) => {
    res.status(404).send({
        message: "Not Found"
    });
});

app.use((error, req, res, next) => {
    res.status(500).render('500', {errorMessage: error});
});

const port = process.env.PORT || 3000;
app.listen(port, 'localhost', null, () => {
    console.log(`Server listening on port ${port}`);
});
