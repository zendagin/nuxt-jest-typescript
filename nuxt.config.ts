import type {NuxtConfig} from "@nuxt/types";
import pkg from "./package.json";

export default {
    mode: "universal",

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
            {hid: "description", name: "description", content: pkg.description}
        ],
        link: [
            {rel: "icon", type: "image/x-icon", href: "/favicon.ico"}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: "#FFFFFF"},

    /*
    ** Global CSS
    */
    css: [],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],

    /*
    ** Nuxt.js modules
    */
    modules: [],

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    }
} as NuxtConfig;
