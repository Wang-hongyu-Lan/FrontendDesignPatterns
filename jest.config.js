module.exports = {
    roots: [
        "<rootDir>/pattern"
    ],
    testRegex: 'pattern/(.+)\\.test\\.(jsx?|tsx?)$',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};