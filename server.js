const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("server started on http://localhost:3000");
});