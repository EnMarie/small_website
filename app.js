const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const webRoutes = require('./server/routes/web');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'client')));

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Use routes
app.use(webRoutes);

// 404 error handling
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'client', '404.html'));
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
