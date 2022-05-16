const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ffr5p.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri);


app.get('/' , (req, res) =>{
    res.send('doctor is coming')
})

app.listen(port, ()=>{
    console.log('port is running');
})