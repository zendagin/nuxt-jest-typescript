import type {Config} from "@jest/types";

export default {
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
        "^~/(.*)$": "<rootDir>/$1",
        "^vue$": "vue/dist/vue.common.js"
    },
    moduleFileExtensions: [
        "ts",
        "js",
        "vue",
        "json"
    ],
    transform: {
        "^.+\\.ts$": "ts-jest",
        "^.+\\.js$": "babel-jest",
        ".*\\.(vue)$": "vue-jest"
    },
    snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/components/**/*.vue",
        "<rootDir>/pages/**/*.vue"
    ],
    testEnvironment: "jsdom"
} as Config.InitialOptions;
