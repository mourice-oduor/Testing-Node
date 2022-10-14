import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default {
    url: process.env.APP_URL || 'http://localhost:3001',
    port: process.env.PORT || 3001,
    environment: process.env.NODE_ENV || 'development',

    databaseUrl: {
        development:
            process.env.DEVELOPMENT_DATABASE_URL ||
            'mongodb://localhost:27017/auth-app',
        production:
            process.env.PRODUCTION_DATABASE_URL ||
            'mongodb://localhost:27017/mernmongo_production',
        test:
            process.env.TEST_DATABASE_URL ||
            'mongodb://localhost:27017/auth-app_test'
    },

    jwtSecret: process.env.JWT_SECRET || '1234',
    development: process.env.NODE_ENV === 'development',
    production: process.env.NODE_ENV === 'production',
    test: process.env.NODE_ENV === 'test'
}