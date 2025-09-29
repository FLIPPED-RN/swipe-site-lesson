const express = require('express');
const app = express();
const port = 5000;

app.get('/', function (req, res) {
  res.send("SERVER FOR SWIPE PROJECT");
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})