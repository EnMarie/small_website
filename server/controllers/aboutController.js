const path = require('path');

exports.getAboutPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../client/about.html'));
};
