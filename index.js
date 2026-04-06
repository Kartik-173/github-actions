const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Hello from CI/CD 😏",
    version: "v1"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});