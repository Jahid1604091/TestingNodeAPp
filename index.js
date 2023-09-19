const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8000;
// const __dirname = path.resolve();
// app.get('/',(req,res)=>res.send("Server Up"));
app.get('/users',(req,res)=>res.json([
    {id:1,name:'John Doe'},
    {id:2,name:'Jane Doe'}
]));
app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'index.html')));
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
