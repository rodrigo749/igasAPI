/* Imports */
var express = require('express'),
    bodyParser = require('body-parser');
    consign = require('consign');
    cors = require('cors');
    path = require('path');

/* Configure express */
var app = express();
//https comentar para usar LOCALHOST
app.get('*', (req, res, next) => {
    if (req.headers['x-forwarded-proto'] != 'https') {
        // checa se o header é HTTP ou HTTPS
        res.redirect("https://" + req.headers.host + req.url);
        // faz o redirect para HTTPS
    } else {
        next();
        // segue com a sequência das rotas
    }
});

// Configuração para utilizar os arquivos estáticos do Angular
app.use(express.static('./public'));

/* Configure body-parser */
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json());

/* Configure cors */
app.set('secret', 'nucleohcsl');

const corsOptions = {
    exposedHeaders: ['x-access-token']
};
app.use(cors(corsOptions));

/* Configure Token */
app.use((req, res, next) => {
    const token = req.headers['x-access-token'];
    console.log('####################################');
    if(token) {
        console.log('A token is send by the application');
        console.log('Token value is ' + token);
    } else {
        console.log('No token is send by the the application');
    }
    console.log('####################################');
    next();
});

/* configure consign */
consign()
    .include('config/database.js')
    .then('app/routes')
    .then('app/controllers')
    .into(app);

module.exports = app;