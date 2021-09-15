const express = require("express");
const app = express();

const router = require("./router");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("json spaces", 2);
app.use(router);

module.exports = app;
