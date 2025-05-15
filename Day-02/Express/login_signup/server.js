const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const users = {};

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: balaram
 *               password:
 *                 type: string
 *                 example: mypassword123
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Username and password are required.
 *       409:
 *         description: User already exists.
 */
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  if (users[username]) {
    return res.status(409).json({ message: "User already exists." });
  }

  users[username] = password;
  res.status(201).json({ message: "User registered successfully." });
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login with username and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: balaram
 *               password:
 *                 type: string
 *                 example: mypassword123
 *     responses:
 *       200:
 *         description: Login successful.
 *       401:
 *         description: Invalid username or password.
 */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username] === password) {
    return res.status(200).json({ message: "Login successful." });
  }

  res.status(401).json({ message: "Invalid username or password." });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
