const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const Connection = require('./config/db');
const config = require('./config/config');
const userRoutes = require('./routes/user');
const errorHandler = require('./middleware/errorMiddleware');
const leadRoutes = require('./routes/lead');
const app = express();

Connection(config.dbUri);

app.use(cors({
    origin: config.FrontendUrl,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true
}));


app.use(cookieParser());
app.use(express.json());


app.use('/api/auth', userRoutes);
app.use('/api/lead', leadRoutes);

app.use(errorHandler);


module.exports = app;