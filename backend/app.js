const express = require("express");
const app = express();

// middlewares
app.use(express.json()); //cada vez que que de una aplicación cliente envíen un dato json puede entenderlo y pasarlo a un objeto de js
app.use(express.urlencoded({ extended: false })); //cuando envien datos a traves de formularios, los pasa a js. Extended false, solo aceptan datos simples .

// routes
app.use(require("./src/routes/routes"));

const PORT = 4000;
app.listen(4000);
console.log(`Server on PORT ${PORT}`);
