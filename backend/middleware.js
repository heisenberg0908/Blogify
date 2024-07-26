const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config'); // Adjust this line if JWT_SECRET is exported differently

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            msg: "No authentication token found. Try signing in again!"
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Set the user info to req.user for later use
        next();
    } catch (error) {
        return res.status(401).json({
            msg: "Invalid or expired token. Please sign in again!"
        });
    }
};

module.exports = authMiddleware;
