const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors')
const app = express();
const db = require('./config/db');
const APIs = require('./routes/Rutas');


app.set('port', process.env.PORT || 5000)

app.use(cors());
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(express.json());
app.use('/api/consumo', APIs);


db.on('error', (error) => {
    console.log(`Error al conectarse a mongodb: ${error}`);
});

db.once('open', () => {
    console.log('Connected to mongodb in port: 27107');
});




app.listen(app.get('port'), () => {
    console.log('the server is running in port', app.get('port'));
});