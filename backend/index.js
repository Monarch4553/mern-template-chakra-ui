const express = require("express");
const cors = require("cors");
const sampleRouter = require("./routes/sample");
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());
app.use("/sample", sampleRouter);
// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
