const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8000;

connectDB();

app.get('/users',(req,res)=>res.json([
    {id:1,name:'John Doe'},
    {id:2,name:'Jane Doe'}
]));

app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'index.html')));

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
