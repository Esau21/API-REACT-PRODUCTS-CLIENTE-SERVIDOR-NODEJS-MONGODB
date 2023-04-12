const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/fullAPIs";

const options = ({
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connect(uri, options);

module.exports = mongoose.connection;