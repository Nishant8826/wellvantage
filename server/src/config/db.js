const mongoose = require('mongoose');

const Connection = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log('DB Connected successfully');
    } catch (error) {
        console.log(`Error occured while connecting with DB : `, error);
        process.exit(1);
    }
}

module.exports = Connection;