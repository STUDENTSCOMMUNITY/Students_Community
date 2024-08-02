const express = require('express');
const router = express.Router();
const { register, verifyOtp, login } = require('../controllers/authController');

// @route    POST api/auth/register
// @desc     Register user and send OTP
// @access   Public
router.post('/register', register);

// @route    POST api/auth/verify-otp
// @desc     Verify OTP and login user
// @access   Public
router.post('/verify-otp', verifyOtp);

// @route    POST api/auth/login
// @desc     Login user
// @access   Public
router.post('/login', login);

module.exports = router;
