const express = require("express");
const userRoutes = express.Router();
const { googleLogin } = require("../controllers/user");
const { authMiddleware } = require("../middleware/auth");

userRoutes.post("/google-login", googleLogin);
userRoutes.get('/check-auth', authMiddleware, (req, res) => {
    const user = req.user;
    res.status(200).json({ success: true, message: 'User is authenticated', user });
});

module.exports = userRoutes;
