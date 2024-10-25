const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');

// Define routes
router.get('/', homeController.getHomePage);
router.get('/about', aboutController.getAboutPage);
router.get('/contact', contactController.getContactPage);

// Handle 404 errors
router.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../client/404.html'));
});

module.exports = router;
