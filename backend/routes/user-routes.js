const express = require('express');
const router = express.Router();

// out files
const { registerUser, loginUser } = require('../controllers/user-controller');

router.post('/', registerUser);

// /api/users/login
router.post('/login', loginUser);

module.exports = router;
