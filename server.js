const express = require('express'); //Inyección de la dependencia
var app = express(); //declaramos una App de Express
var PORT = process.env.PORT || 3000; //definición del puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //Contenido estático

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html><html lang="en"> <head><link rel="stylesheet" href="/assets/style.css" > 
    <title>Document</title> </head> 
    <body> <h1>Hola mundo</h1> 
    <p> Este es un parrafo y su contenido debe ser azul</p></body> </html>`)
});

app.get('/person/:id', (req, res) => {
    res.render('person', {ID: req.params.id, Qstr: req.query.qrst}); //Necesitamos enviar 2 parámetros, el nombre de la vista que debe “renderizarse” en el motor de vistas y los parámetros que va a recibir, en este caso, un objeto que contiene dos llaves ID y Qstr.
});

app.listen(PORT); //levantar el server y ponerlo a la escucha