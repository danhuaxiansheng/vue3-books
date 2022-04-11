import { createStore } from "vuex";

import config from "./vuex.js";

const files = require.context("./modules", false, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});
Object.keys(modules).forEach((key) => {
  modules[key]["namespaced"] = true;
});

export default createStore({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  // modules,
  modules,
  ...config,
});
