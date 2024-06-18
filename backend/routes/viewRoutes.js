const express = require('express');
const router = express.Router();
const path = require('path');

const frontendPath = path.join(__dirname, '../frontend');

router.get('/', (req, res) => res.sendFile(path.join(frontendPath, 'index.html')));
router.get('/about', (req, res) => res.sendFile(path.join(frontendPath, 'about.html')));
router.get('/add-pet-screen', (req, res) => res.sendFile(path.join(frontendPath, 'add-pet-screen.html')));
router.get('/appointments', (req, res) => res.sendFile(path.join(frontendPath, 'appointments.html')));
router.get('/contact', (req, res) => res.sendFile(path.join(frontendPath, 'contact.html')));
router.get('/delete-pet-screen', (req, res) => res.sendFile(path.join(frontendPath, 'delete-pet-screen.html')));
router.get('/log', (req, res) => res.sendFile(path.join(frontendPath, 'log.html')));
router.get('/petedit', (req, res) => res.sendFile(path.join(frontendPath, 'petedit.html')));
router.get('/register_success', (req, res) => res.sendFile(path.join(frontendPath, 'register_success.html')));
router.get('/registration', (req, res) => res.sendFile(path.join(frontendPath, 'registration.html')));
router.get('/update-pet-screen', (req, res) => res.sendFile(path.join(frontendPath, 'update-pet-screen.html')));
router.get('/view-pet-screen', (req, res) => res.sendFile(path.join(frontendPath, 'view-pet-screen.html')));

module.exports = router;
