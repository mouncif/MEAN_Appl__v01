// Importation du framework express
let express = require('express')

//Importation body-parse
let bodyParser = require('body-parser');

//importation odm mongoose
let mongoose = require('mongoose');

// Initialialisation de app
let app = express();

app.use(bodyParser.urlencoded({
    extended: true
}) );

app.use(bodyParser.json() );

mongoose.connect('mongodb://localhost/mean_appl', {useNewUrlParser:true});

var db = mongoose.connection;

if(!db)
    console.log("Connection db: Echouée");
else
console.log("Connection db: Succèe");   


//Initialisation du port 
var port = process.env.PORT || 8080;

// Message par default suite à l'URL : localhost:8080
app.get('/', (req, res) => res.send('Bonjour à tous avec Express'));

// Ecoute de app sur le port spécifié:
let apiRoutes = require("./api-routes");

app.use('/api', apiRoutes);

app.listen(port, function () {
    console.log("Ecoute sur le port " + port);
});