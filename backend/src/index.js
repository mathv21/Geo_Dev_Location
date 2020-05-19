// Importando o express 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

// Fazendo com que a variavel app se transforme em uma função .
const app = express();

mongoose.connect('mongodb+srv://app:appdb123@cluster0-kagsu.mongodb.net/app?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.use(cors());
app.use(express.json()) // faz com que o express entenda Json.
app.use(routes);



app.listen(3333);