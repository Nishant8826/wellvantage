require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    dbUri: process.env.MONGO_URI,
    FrontendUrl: process.env.FrontendUrl,
    jwt_secret: process.env.JWT_SECRET,
};

module.exports = config;

