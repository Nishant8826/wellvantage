
const errorHandler = (err, req, res, next) => {

    err.message = err.message || 'Internal Servver Error';
    err.code = err.code || 500;
    return res.status(err.code).json({ success: false, message: err.message });
};

module.exports = errorHandler;
