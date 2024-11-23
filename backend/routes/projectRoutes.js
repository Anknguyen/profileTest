// projectsRoutes
const express = require('express');
const router = express.Router();

const projects = [
    { id: 1, name: 'Project 1', image: 'image1.jpg', type: 'web' },
    { id: 2, name: 'Project 2', image: 'image2.jpg', type: 'app' },
    { id: 3, name: 'Project 3', image: 'image3.jpg', type: 'web' },
    { id: 4, name: 'Project 4', image: 'image4.jpg', type: 'app' },
    { id: 5, name: 'Project 5', image: 'image5.jpg', type: 'web' },
    { id: 6, name: 'Project 6', image: 'image6.jpg', type: 'app' }
];

// GET endpoint to fetch websites
router.get('/api/web', (req, res) => {
    console.log('GET /api/web');
    const webProjects = projects.filter(project => project.type.toLowerCase() === 'web');
    res.status(200).json(webProjects);
    console.log(webProjects);
});

// GET endpoint to fetch apps
router.get('/api/app', (req, res) => {
    console.log('GET /api/app');
    const appProjects = projects.filter(project => project.type.toLowerCase() === 'app');
    res.status(200).json(appProjects);
    console.log(appProjects);
});

module.exports = router;