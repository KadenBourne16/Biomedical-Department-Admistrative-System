const express = require('express')
const app = express()
const port = 3300


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });