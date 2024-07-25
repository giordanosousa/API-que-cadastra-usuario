require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

requireDir('./src/models');

app.use('/sistema', require('./src/routes/routes'));

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.5i31qc4.mongodb.net/`)
    .then(() => {
        app.listen(3005)
        console.log('Conexão com DB realizada com sucesso!')
    })
    .catch((err) => console.log('Erro na conexão DB!', err))


