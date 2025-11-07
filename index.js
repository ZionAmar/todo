const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const api = process.env.HOST;
const app = express();
app.use(express.static(__dirname));
const db = require('./config/db_config');

app.get('/',(req,res)=>{res.sendFile(__dirname+'/public/index.html')})

app.listen(port,()=>{console.log(`http://${api}:${port}`)})