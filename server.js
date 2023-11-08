const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  patchUser,
  putUser,
} = require("./controllers/userControllers");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));
// GET a single blog
app.get("/api/users/:id", getUser);
// DELETE a blog
app.delete("/api/users/:id", deleteUser);
// Update blog using PATCH
app.patch("/api/users/:id", patchUser);
// Update blog using PUT
app.put("/api/users/:id", putUser);
// Add a new blog
app.post("/api/users", createUser);
// GET all blogs
app.get("/api/users", getUsers);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});