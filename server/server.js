require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
//parse aplication para q el server entienda json recibidos
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// Configuracion global de rutas
app.use(require('./routes/index'));

const url = process.env.URLDB;
mongoose.set('useCreateIndex', true);
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log('Bases de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
})