const express = require('express');
const router = express.Router();

// out files
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/user-controller');
const { protect } = require('../midlleware/auth-middleware');

router.post('/', registerUser);

// ~/api/users/login
router.post('/login', loginUser);

// protected ~/api/users/me
router.get('/me', protect, getMe);

module.exports = router;
