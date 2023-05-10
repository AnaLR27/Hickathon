const express = require("express");
const app = express();

// middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

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
