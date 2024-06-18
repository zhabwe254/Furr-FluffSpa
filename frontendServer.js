const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'about.html')));
app.get('/add-pet-screen', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'add-pet-screen.html')));
app.get('/appointments', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'appointments.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'contact.html')));
app.get('/delete-pet-screen', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'delete-pet-screen.html')));
app.get('/log', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'log.html')));
app.get('/petedit', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'petedit.html')));
app.get('/register_success', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'register_success.html')));
app.get('/registration', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'registration.html')));
app.get('/update-pet-screen', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'update-pet-screen.html')));
app.get('/view-pet-screen', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'view-pet-screen.html')));

// Start the server
const port = 3001;
app.listen(port, () => {
    console.log(`Frontend server started on port ${port}`);
});
