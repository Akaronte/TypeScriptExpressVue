/* app/server.ts */
/*
// Import everything from express and assign it to the express variable
import  express from 'express';

// Import WelcomeController from controllers entry point
import {WelcomeController} from './controllers';



// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = 3000;


app.use('/welcome', WelcomeController);
console.log(__dirname );
app.use(express.static(__dirname + '/dist'));
// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});*/

const express = require('express');
const app = express();
const morgan = require('morgan');

//Setting
app.set('port', process.env.PORT || 3000 )
//midelsware
app.use(morgan('dev'));
//routes

//static files
app.use(express.static(__dirname + '/../dist'));

console.log(__dirname );
app.listen(app.get('port'), () => {
    console.log('listen on port '+ app.get('port'));
});
