const express = require('express');
const { paymentCreate } = require('../controllers/bkash');
const { bkash_auth } = require('../middleware/bkash');
require('dotenv').config();
const router = express.Router();

router.post('/payment/create',bkash_auth, paymentCreate);


module.exports = router;