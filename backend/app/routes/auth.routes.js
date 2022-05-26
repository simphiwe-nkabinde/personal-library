const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

//sign in user
router.post('/signin', authController.signin)

module.exports = router;