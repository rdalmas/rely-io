export default {
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    // process `*.tsx` files with `ts-jest`
    },
    rootDir: "src",
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^.+\\.svg$": "jest-transformer-svg",
    },
}
