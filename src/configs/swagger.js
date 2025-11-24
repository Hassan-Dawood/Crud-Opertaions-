const swaggerJsdoc = require("swagger-jsdoc");

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
        url: "https://crud-opertaions.onrender.com/",
      },
    ],
  },
  apis: ["./src/routes/*.js"], 
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
