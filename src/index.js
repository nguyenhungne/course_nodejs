const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override')
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const routes = require('./routes');
const db = require('./config/db');
app.use(methodOverride('_method'))

//connect to DB:
db.connect();

// HTTP logger
app.use(morgan('combined'));

//static
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a + b, 
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// Routes init
routes(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
