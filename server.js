const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// buttons -------------

var dashButton = document.getElementById('dashButton');
dashButton.onclick = function() {
    location.assign('https://stackoverflow.com/dashboard/');
};

var homeButton = document.getElementById('homeButton');
homeButton.onclick = function() {
    location.assign('https://stackoverflow.com/home/');
};

var loginButton = document.getElementById('loginButton');
loginButton.onclick = function() {
    location.assign('https://stackoverflow.com/login/');
}














sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening to "localhost:3001"'));
});