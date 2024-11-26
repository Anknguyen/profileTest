const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
const port = process.env.PORT || 3001; // Use a different port than your React app

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use(contactRoutes);
app.use(projectRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});