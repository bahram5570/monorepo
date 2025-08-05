import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jest-fixed-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@providers/(.*)$': '<rootDir>/src/providers/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@actions/(.*)$': '<rootDir>/src/app/actions/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@assets/(.*)$': '<rootDir>/public/assets/$1',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
    '^.+\\.css$': 'jest-css-modules-transform',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
};

export default config;
