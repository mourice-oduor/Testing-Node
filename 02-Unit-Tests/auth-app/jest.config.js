module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^@fullstackjs/mail$': '<rootDir>/__mocks__/@fullstackjs/mail.ts',
        '^@models/(.*)$': '<rootDir>/server/models/$1',
        '^@config$': '<rootDir>/server/config.ts',
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
};
