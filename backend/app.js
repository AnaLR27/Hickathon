const express = require("express");
const app = express();

// middlewares
app.use(express.json()); //cada vez que que de una aplicación cliente envíen un dato json puede entenderlo y pasarlo a un objeto de js
app.use(express.urlencoded({ extended: false })); //cuando envien datos a traves de formularios, los pasa a js. Extended false, solo aceptan datos simples .

// import routes
const managerRoutes = require("./src/routes/manager.routes");
const employeeRoutes = require("./src/routes/employee.routes");

// routes
const manager = "/manager";
app.use(manager, managerRoutes);
const employee = "/employee";
app.use(employee, employeeRoutes);

const PORT = 3000;
app.listen(PORT);
console.log(`Server on PORT ${PORT}`);
