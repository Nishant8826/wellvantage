const User = require("../modals/user");
const TryCatch = require("../utils/tryCatch");
const jwt = require('jsonwebtoken');
const config = require("../config/config");

exports.googleLogin = TryCatch(async (req, res, next) => {
    const { firebaseUid, name, email, photoURL, emailVerified } = req.body;

    let user = await User.findOne({ firebaseUid });

    if (!user) {
        user = await User.create({ firebaseUid, name, email, photoURL, emailVerified });
    }

    const token = await jwt.sign(user.toObject(), config.jwt_secret, { expiresIn: "1h" });

    res.cookie('token', token, { httpOnly: true, secure: false }).json({ success: true, message: 'User logged in successfully', user });
});