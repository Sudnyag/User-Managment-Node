var express = require('express');
var path = require('path'); 
var cookieParser = require('cookie-parser');
const {resticToLoggedInUserOnly} = require('./middleware/auth');
var app = express();
var router = require('./router');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use( router);
app.use(cookieParser());
app.get('/Signup', function (req, res) {
    return res.render("Signup");
});
app.get('/login', function (req, res) {
    return res.render("login");
});


app.listen(3001, function () {
    console.log("Server listening on port 3001");
});
