const express = require("express");
const app = express();

// middlewares
app.use(express.json()); //cada vez que que de una aplicación cliente envíen un dato json puede entenderlo y pasarlo a un objeto de js
app.use(express.urlencoded({ extended: false })); //cuando envien datos a traves de formularios, los pasa a js. Extended false, solo aceptan datos simples .

//importamos los routes
const users = require("./src/routes/routes")

// routes
const url = "/api";
app.use(url, users);

const PORT = 3000;
app.listen(PORT);
console.log(`Server on PORT ${PORT}`);
