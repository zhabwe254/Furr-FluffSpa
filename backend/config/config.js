require('dotenv').config();

const config = {
    development: {
        port: process.env.DEV_PORT || 3000,
        db: {
            uri: process.env.DEV_DB_URI || 'mongodb://localhost/furr-fluff-spa-dev'
        },
        jwtSecret: process.env.DEV_JWT_SECRET || 'your-development-secret'
    },
    production: {
        port: process.env.PORT || 3000,
        db: {
            uri: process.env.DB_URI || 'mongodb://localhost/furr-fluff-spa'
        },
        jwtSecret: process.env.JWT_SECRET || 'your-production-secret'
    },
    test: {
        port: process.env.TEST_PORT || 3000,
        db: {
            uri: process.env.TEST_DB_URI || 'mongodb://localhost/furr-fluff-spa-test'
        },
        jwtSecret: process.env.TEST_JWT_SECRET || 'your-test-secret'
    }
};

// config.js

module.exports = {
    database: 'mongodb://localhost:27017/furr-fluffspa'
};

const env = process.env.NODE_ENV || 'development';
module.exports = config[env];
