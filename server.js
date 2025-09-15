const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const webServer = process.env.APP_NAME;
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Send index.html on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log(`Request served by ${webServer}`);
});

app.listen(PORT, () => {
  console.log(`${webServer} running at http://localhost:${PORT}`);
});
