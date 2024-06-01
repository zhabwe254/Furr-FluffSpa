const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    // Check for JWT token in request headers
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Authorization denied. Please provide a valid token.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token.' });
    }
};

module.exports = authenticateUser;
