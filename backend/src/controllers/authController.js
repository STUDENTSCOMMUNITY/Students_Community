const User = require('../models/User');
const sendOtp = require('../utils/sendOtp');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    const { name, collegeName, mobileNo, email, degree, branch } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            name,
            collegeName,
            mobileNo,
            email,
            degree,
            branch,
        });

        await user.save();

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        user.otp = otp;
        user.otpExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        sendOtp(otp, mobileNo);

        res.json({ msg: 'OTP sent to mobile number' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.verifyOtp = async (req, res) => {
    const { mobileNo, otp } = req.body;

    try {
        let user = await User.findOne({ mobileNo });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid mobile number' });
        }

        if (user.otp !== otp || user.otpExpires < Date.now()) {
            return res.status(400).json({ msg: 'Invalid or expired OTP' });
        }

        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.login = async (req, res) => {
    const { email, otp } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid email' });
        }

        const otpMatch = await bcrypt.compare(otp, user.otp);

        if (!otpMatch) {
            return res.status(400).json({ msg: 'Invalid OTP' });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
