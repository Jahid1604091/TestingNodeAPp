const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

connectDB();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/users', require('./routes/users'));

app.use(express.static(path.join(__dirname,'../client/dist')));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname,'client','dist','index.html')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
