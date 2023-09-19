const express = require('express');
const { register, getUsers, auth_user, logout } = require('../controllers/users');

const router = express.Router();

router.get('/', getUsers);
router.post('/auth', auth_user);
router.post('/', register);
router.post('/logout', logout);

module.exports = router;