const config = require("../config/config");
const jwt = require('jsonwebtoken');
const ErrorClass = require("../utils/ErrorClass");


exports.authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if (!token) return next(new ErrorClass("You are not authenticated", 401));
        const decoded = await jwt.verify(token, config.jwt_secret);
        if (!decoded) return next(new ErrorClass("Invalid token", 401));
        req.user = decoded;
        next();
    } catch (error) {
        return next(new ErrorClass("Authentication failed", 401));
    }
};