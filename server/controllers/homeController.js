const path = require('path');

exports.getHomePage = (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
};
