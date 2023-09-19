const express = require('express');

const app = express();
const PORT = 8000;
app.get('/',(req,res)=>res.send("Server Up"));
app.get('/users',(req,res)=>res.json([
    {id:1,name:'John Doe'},
    {id:2,name:'Jane Doe'}
]));
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
