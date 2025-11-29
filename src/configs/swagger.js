const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TaskMaster API",
      version: "1.0.0",
      description: "Task CRUD API using Node.js, Express & MongoDB",
    },
    servers: [
      {
        url: "https://crud-opertaions.onrender.com",
      },
    ],
  },
 apis: [path.join(__dirname, "../routes/*.js")], 
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
