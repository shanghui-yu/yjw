import { init } from "@rematch/core";

let models = {},
  files = require.context("./models", false, /\.js|ts$/);
files.keys().forEach(file => {
  let key = file.replace("/", "").split(".")[1];
  models[key] = files(file).default;
});

const store = init({
  models
});

export default store;
