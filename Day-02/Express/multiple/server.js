const express = require("express");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get
 *     description: Retrieve information
 *     responses:
 *       200:
 *         description: Successful response with info
 */
app.get("/", function (req, res) {
  res.send("GET Request!");
});

/**
 * @swagger
 * /:
 *   post:
 *     summary: Post
 *     description: Send Information
 *     responses:
 *       200:
 *         description: Successful transfer of info
 */
app.post("/", function (req, res) {
  res.send("POST Request!");
});

/**
 * @swagger
 * /:
 *   put:
 *     summary: Put
 *     description: Updation of information
 *     responses:
 *       200:
 *         description: Successful updation.
 */
app.put("/", function (req, res) {
  res.send("PUT Request!");
});

/**
 * @swagger
 * /:
 *   delete:
 *     summary: Delete
 *     description: Delete information.
 *     responses:
 *       200:
 *         description: Successful deletion.
 */
app.delete("/", function (req, res) {
  res.send("DELETE Request!");
});

app.listen(3000, () => {
  console.log("Connect on port 3000");
});
