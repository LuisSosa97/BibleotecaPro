require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//HABILITACION DE CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, token'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    next();
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/usuario'));
app.use(require('./routes/libro'));
app.use(require('./routes/prestamo'));
app.use(require('./routes/upload'));
app.use(require('./routes/login'));
app.use(require('./routes/image'));
//app.use(require('./models/prestamo'));

// mongoose.connect('mongodb+srv://admin:140797@cluster0-tsywd.mongodb.net/bibloteca?retryWrites=true&w=majority', (err, res) => {
//     if (err) throw err;
//     console.log('Base de datos ONLINE');
// });
// app.listen(process.env.PORT, () => {
//     console.log('Escuchando el puerto 3000');
// });

mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err, res) => {
        if (err) throw err;
        console.log('Base de datos ONLINE');
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto: 3000');
});